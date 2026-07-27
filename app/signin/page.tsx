import { redirect } from "next/navigation"
import { signIn, auth, providerMap } from "@/auth"
import { AuthError } from "next-auth"
import Title from "../components/Title/Title"
import { Metadata } from "next"
const SIGNIN_ERROR_URL = "/error"

interface Props {
    searchParams: Promise<{ callbackUrl: string | undefined }>
}

export const metadata: Metadata = {
  title: "Sign In",
  description: "Admin-only sign in. Non-admins ignore this page",
};

export default async function SignInPage({searchParams} : Props) {

    const { callbackUrl } = await searchParams;
  
    return (
        <>
            <Title title={"Admin Login"} fromTop={18} bottomLine textShadow/>
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2"><em>Know that authorization is only for Admin, normal users should not log in.</em></p>

            <div className="absolute inset-0 items-center justify-center flex flex-col gap-2">
                
                {Object.values(providerMap).map((provider) => (
                    <form
                    key={provider.id}
                    action={async () => {
                        "use server"
                        try {
                        await signIn(provider.id, {
                            redirectTo: callbackUrl ?? "",
                        })
                        } catch (error) {

                        if (error instanceof AuthError) {
                            return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
                        }

                        throw error
                        }
                    }}
                    >
                        <button className="m-auto btn btn-outline  px-5 py-6" type="submit">
                            <span>Sign in with {provider.name}</span>
                        </button>
                    </form>
                ))}
            </div>
        </>
  )
}