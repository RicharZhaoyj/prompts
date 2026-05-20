import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // 在真实场景下，这里会连接邮件列表服务（如 Mailchimp, ConvertKit, 或自建数据库
    // 示例:
    // await addSubscriber(email)

    console.log('New subscriber:', email)

    return NextResponse.json({
      success: true,
      message: 'Subscribed successfully!'
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
}
