import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import type { Provider } from "next-auth/providers"
 
const providers: Provider[] = [
  GitHub,
]
 
export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider()
      return { id: providerData.id, name: providerData.name }
    } else {
      return { id: provider.id, name: provider.name }
    }
  })
  .filter((provider) => provider.id !== "credentials")
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account?.provider === "github") {
        const adminWhitelist = (process.env.GITHUB_WHITELIST || "")
          .split(",")
          .map((id) => id.trim())

        token.role = adminWhitelist.includes(account.providerAccountId)
          ? "admin"
          : "user"
      }

      return token

    },
    async session({ session, token }) {   
      
      if (token.role) {
        session.user.role = token.role as string
      } else {
        session.user.role = "none"
      }
      console.log(session);

      return session
    },
  }
})