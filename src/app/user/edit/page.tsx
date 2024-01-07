import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import React from "react"
import EditUserSession from "./Edit-Session"
import { SessionProvider } from "next-auth/react"

const editUser = async () => {
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
      <EditUserSession />
    </SessionProvider>
  )
}

export default editUser
