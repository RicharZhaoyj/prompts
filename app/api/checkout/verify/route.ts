import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { isStripeConfigured, stripe } from '@/lib/stripe'
import { getPromptById } from '@/lib/prompts'

export async function GET(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!isStripeConfigured) {
    return NextResponse.json({ error: 'Checkout is not configured' }, { status: 503 })
  }

  const sessionId = new URL(request.url).searchParams.get('session_id')
  if (!sessionId) {
    return NextResponse.json({ error: 'Missing session_id' }, { status: 400 })
  }

  try {
    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId)
    if (checkoutSession.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Payment is not complete' }, { status: 402 })
    }

    const currentUserId = (session.user as { id?: string }).id
    const purchaseUserId = checkoutSession.metadata?.userId
    if (purchaseUserId && currentUserId && purchaseUserId !== currentUserId) {
      return NextResponse.json({ error: 'Purchase belongs to another account' }, { status: 403 })
    }

    const promptId = checkoutSession.metadata?.promptId
    if (!promptId) {
      return NextResponse.json({ error: 'Purchase metadata is incomplete' }, { status: 422 })
    }

    const prompt = await getPromptById(promptId)
    if (!prompt) {
      return NextResponse.json({ error: 'Prompt not found' }, { status: 404 })
    }

    return NextResponse.json({
      prompt: {
        id: prompt.id,
        title: prompt.title,
        content: prompt.content,
        price: prompt.price,
        type: prompt.type,
      },
    })
  } catch (error) {
    console.error('Error verifying checkout session:', error)
    return NextResponse.json({ error: 'Unable to verify purchase' }, { status: 500 })
  }
}
