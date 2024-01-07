import { SessionProvider } from "next-auth/react"
import UserSession from "./User-Session"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

const UserPage = async () => {
  const session = await auth()
  
  if (!session) {
    redirect("/")
  }

  if (session?.user) {
    session.user = {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    }
  }

  return (
    <SessionProvider session={session}>
      <UserSession />
    </SessionProvider>
  )
}
export default UserPage
