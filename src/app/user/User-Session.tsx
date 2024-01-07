"use client"
import React from "react"
import { useSession } from "next-auth/react"
import User from "@/components/User/User"

const UserSession = () => {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Hang on there...</p>
  }

  if (status === "authenticated") {
    return (
      <>
        <User session={session} />
      </>
    )
  }
}

export default UserSession
