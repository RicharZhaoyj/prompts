
import { NextResponse } from 'next/server'
import { isStripeConfigured, stripe } from '@/lib/stripe'
import { getPromptById } from '@/lib/prompts'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)
  
  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!isStripeConfigured) {
    return NextResponse.json({ error: 'Checkout is not configured' }, { status: 503 })
  }

  if (!(session.user as { id?: string }).id) {
    return NextResponse.json({ error: 'Account identity is unavailable' }, { status: 403 })
  }

  try {
    const { promptId } = await request.json()
    const prompt = await getPromptById(promptId)

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt not found' }, { status: 404 })
    }

    if (!Number.isFinite(prompt.price) || prompt.price <= 0) {
      return NextResponse.json({ error: 'This prompt is free' }, { status: 400 })
    }

    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: Math.round(prompt.price * 100),
            product_data: {
              name: prompt.title,
              description: prompt.description.slice(0, 500),
              ...(prompt.image_url ? { images: [prompt.image_url] } : {}),
            },
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      client_reference_id: (session.user as { id: string }).id,
      customer_email: session.user.email || undefined,
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/purchase-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/prompt/${promptId}`,
      metadata: {
        promptId: prompt.id,
        userId: (session.user as any).id || '',
      },
    })

    return NextResponse.json({ url: checkoutSession.url })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}

