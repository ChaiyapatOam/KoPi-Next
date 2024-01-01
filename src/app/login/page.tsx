"use client"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import React from "react"

type Props = {}
const page = (props: Props) => {
  return (
    <div>
      Login page
      <Button onClick={() => signIn("google")}>Google Login</Button>
    </div>
  )
}

export default page
