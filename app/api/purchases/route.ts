import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import {
  getSupabaseServer,
  isSupabaseServerConfigured,
} from '@/lib/supabase-server'

export const runtime = 'nodejs'

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const userId = (session.user as { id?: string }).id
  if (!userId) {
    return NextResponse.json({ error: 'Account identity is unavailable' }, { status: 403 })
  }

  if (!isSupabaseServerConfigured()) {
    return NextResponse.json(
      { error: 'Purchase history is not configured' },
      { status: 503 }
    )
  }

  const { data, error } = await getSupabaseServer()
    .from('purchases')
    .select(
      'id, stripe_session_id, prompt_id, amount, currency, status, created_at, updated_at'
    )
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Unable to load purchase history:', error)
    return NextResponse.json(
      { error: 'Unable to load purchase history' },
      { status: 500 }
    )
  }

  return NextResponse.json({ purchases: data ?? [] })
}

