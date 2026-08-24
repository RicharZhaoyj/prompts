import Stripe from 'stripe'

// 保留构建期默认值；真实支付接口会在运行时检查生产密钥。
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || "sk_test_placeholder"

export const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
  typescript: true,
})

export const getStripePublicKey = () => {
  return process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "pk_dummy_key"
}

export const isStripeConfigured = Boolean(
  process.env.STRIPE_SECRET_KEY && process.env.NEXT_PUBLIC_SITE_URL
)

