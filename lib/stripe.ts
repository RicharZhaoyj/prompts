import Stripe from 'stripe'

// 提供默认值，避免构建失败
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || "dummy-secret-key-for-development"

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
  typescript: true,
})

export const getStripePublicKey = () => {
  return process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "pk_dummy_key"
}
