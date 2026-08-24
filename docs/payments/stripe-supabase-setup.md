# Stripe 订单记录上线步骤

支付代码已经包含签名校验和幂等订单写入，但生产环境必须先完成以下配置：

1. 在 Supabase SQL Editor 执行 `supabase/migrations/20260822_create_purchases.sql`。
2. 在 Vercel Production 环境配置 `SUPABASE_SERVICE_ROLE_KEY`。该值只能作为服务端变量，不能放入 `NEXT_PUBLIC_*`。
3. 在 Stripe Dashboard 创建生产 Webhook，Endpoint 填写 `https://prompts.link.cn/api/stripe/webhook`，至少监听：
   - `checkout.session.completed`
   - `checkout.session.async_payment_succeeded`
   - `checkout.session.async_payment_failed`
   - `checkout.session.expired`
   - `charge.refunded`
4. 将该 Endpoint 的签名密钥配置为 Vercel Production 的 `STRIPE_WEBHOOK_SECRET`。
5. 重新部署后，在 Stripe Dashboard 用测试事件验证 Webhook 返回 2xx；再用测试卡完成一笔测试支付，确认 `purchases` 中只有一条对应 `stripe_session_id` 的记录。

未完成第 1—4 步时，Webhook 会返回 503，Stripe 会重试；不会写入不完整订单。

