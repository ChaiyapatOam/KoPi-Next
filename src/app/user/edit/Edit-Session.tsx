"use client"
import React from "react"
import { useSession } from "next-auth/react"
import User from "@/components/User/User"
import EditUser from "@/components/User/EditUser"

const EditUserSession = () => {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Hang on there...</p>
  }

  if (status === "authenticated") {
    return (
      <>
        <EditUser session={session} />
      </>
    )
  }
}

export default EditUserSession
