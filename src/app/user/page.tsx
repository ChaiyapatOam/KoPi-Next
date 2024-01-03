import { SessionProvider } from "next-auth/react"
import User from "./User"
import { auth } from "@/lib/auth"

const UserPage = async () => {
  const session = await auth()

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
      <User />
    </SessionProvider>
  )
}
export default UserPage
