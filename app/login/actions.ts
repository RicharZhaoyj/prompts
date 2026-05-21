'use server'

import { signIn } from "@/lib/auth"

export async function handleSignIn(provider: string) {
  await signIn(provider, { redirectTo: "/dashboard" })
}