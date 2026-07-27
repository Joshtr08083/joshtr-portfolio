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
    async signIn({account}) {
      console.log(process.env.GITHUB_WHITELIST);
      if (account?.provider !== "github") return false

      const githubId = account.providerAccountId;  
      const whitelistEnv = process.env.GITHUB_WHITELIST || "";
      const allowedIds = whitelistEnv.split(",").map(id => id.trim());
      
      return allowedIds.includes(githubId);
    }
  }
})