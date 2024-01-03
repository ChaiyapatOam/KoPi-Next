"use client"
import React from "react"
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react"
import { Button } from "@/components/ui/button"

type Props = {}

const User = (props: Props) => {
  const { data: session, status } = useSession()
  const userEmail = session?.user?.email
  if (status === "loading") {
    return <p>Hang on there...</p>
  }

  if (status === "authenticated") {
    return (
      <>
        <p>{session.user?.id}</p>
        <p>Signed in as {userEmail}</p>
        <Button onClick={() => signOut()}>Sign out</Button>
        <img
          src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png"
          className="h-20 w-20"
        />
      </>
    )
  }

  return (
    <>
      <p>Not signed in.</p>
      <button onClick={() => signIn("google")}>Sign in</button>
    </>
  )
}

export default User
