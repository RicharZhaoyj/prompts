import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { isSupabaseServerConfigured, getSupabaseServer } from '@/lib/supabase-server'
import { isStripeConfigured, stripe } from '@/lib/stripe'

export const runtime = 'nodejs'

type PurchaseStatus = 'paid' | 'pending' | 'failed' | 'expired' | 'refunded'

function getStringId(value: string | Stripe.PaymentIntent | null | undefined) {
  return typeof value === 'string' ? value : value?.id
}

function getSessionPurchase(session: Stripe.Checkout.Session, status: PurchaseStatus) {
  const userId = session.metadata?.userId || session.client_reference_id
  const promptId = session.metadata?.promptId

  if (!userId || !promptId || !session.id) {
    return null
  }

  return {
    stripe_session_id: session.id,
    stripe_payment_intent_id: getStringId(session.payment_intent),
    user_id: userId,
    prompt_id: promptId,
    amount: session.amount_total ?? 0,
    currency: (session.currency || 'usd').toLowerCase(),
    status,
  }
}

async function upsertPurchase(
  session: Stripe.Checkout.Session,
  status: PurchaseStatus,
  event: Stripe.Event
) {
  const purchase = getSessionPurchase(session, status)
  if (!purchase) {
    console.warn('Ignoring checkout event with incomplete metadata', {
      eventId: event.id,
      sessionId: session.id,
    })
    return
  }

  const { error } = await getSupabaseServer()
    .from('purchases')
    .upsert(
      {
        ...purchase,
        stripe_event_id: event.id,
        last_event_type: event.type,
      },
      { onConflict: 'stripe_session_id' }
    )

  if (error) {
    throw new Error(`Unable to persist purchase: ${error.message}`)
  }
}

export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret || !isStripeConfigured) {
    return NextResponse.json(
      { error: 'Stripe webhook is not configured' },
      { status: 503 }
    )
  }

  const signature = request.headers.get('stripe-signature')
  if (!signature) {
    return NextResponse.json({ error: 'Missing Stripe signature' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    const rawBody = await request.text()
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret)
  } catch (error) {
    console.error('Invalid Stripe webhook signature:', error)
    return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 400 })
  }

  if (
    event.type.startsWith('checkout.session.') ||
    event.type === 'charge.refunded'
  ) {
    if (!isSupabaseServerConfigured()) {
      return NextResponse.json(
        { error: 'Purchase store is not configured' },
        { status: 503 }
      )
    }
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
      case 'checkout.session.async_payment_succeeded':
        await upsertPurchase(
          event.data.object as Stripe.Checkout.Session,
          event.type === 'checkout.session.completed' &&
          (event.data.object as Stripe.Checkout.Session).payment_status !== 'paid'
            ? 'pending'
            : 'paid',
          event
        )
        break
      case 'checkout.session.async_payment_failed':
        await upsertPurchase(
          event.data.object as Stripe.Checkout.Session,
          'failed',
          event
        )
        break
      case 'checkout.session.expired':
        await upsertPurchase(
          event.data.object as Stripe.Checkout.Session,
          'expired',
          event
        )
        break
      case 'charge.refunded': {
        const charge = event.data.object as Stripe.Charge
        const paymentIntentId = getStringId(charge.payment_intent)
        if (paymentIntentId) {
          const { error } = await getSupabaseServer()
            .from('purchases')
            .update({
              status: 'refunded',
              stripe_event_id: event.id,
              last_event_type: event.type,
            })
            .eq('stripe_payment_intent_id', paymentIntentId)

          if (error) {
            throw new Error(`Unable to persist refund: ${error.message}`)
          }
        }
        break
      }
      default:
        break
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Stripe webhook processing failed:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

