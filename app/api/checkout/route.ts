import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { getPromptById } from '@/lib/prompts'
import { auth } from '@/lib/auth'

export async function POST(request: Request) {
  const session = await auth()
  
  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { promptId } = await request.json()
    const prompt = await getPromptById(promptId)

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt not found' }, { status: 404 })
    }

    const product = await stripe.products.create({
      name: prompt.title,
      description: prompt.description,
      images: prompt.image_url ? [prompt.image_url] : [],
    })

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: Math.round(prompt.price * 100),
      currency: 'usd',
    })

    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/purchase-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/prompt/${promptId}`,
      metadata: {
        promptId: prompt.id,
        userId: session.user.id || '',
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
