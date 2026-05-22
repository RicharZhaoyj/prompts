import NextAuth, { AuthOptions, SessionStrategy } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import type { Session, User } from "next-auth"
import type { JWT } from "next-auth/jwt"

// 提供默认值，避免构建失败
const GITHUB_ID = process.env.GITHUB_ID || "dummy-id"
const GITHUB_SECRET = process.env.GITHUB_SECRET || "dummy-secret"
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "dummy-client-id"
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "dummy-client-secret"
const AUTH_SECRET = process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET || "fallback-secret-for-development-please-change-in-production"

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
        token.image = user.image
      }
      return token
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token && session.user) {
        (session.user as any).id = token.id as string
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`
      }
      if (new URL(url).origin === baseUrl) {
        return url
      }
      return baseUrl
    },
  },
  secret: AUTH_SECRET,
}

export default NextAuth(authOptions)
