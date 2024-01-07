"use client"
import { signIn } from "next-auth/react"
import React from "react"
import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"
type Props = {}

const Home: React.FC<Props> = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Welcome to Kopi</h1>
      {/* Login Google */}
      <div className="text-center">
        <Button
          className="px-4 py-3 mt-4 mr-1 font-bold hover:ring-1 hover:ring-primary hover:scale-110 transition ease-linear duration-200"
          onClick={() => signIn("google", { callbackUrl: "/user" })}
          variant="outline"
        >
          <Image
            src="/images/google_logo.png"
            alt="google"
            width={20}
            height={20}
            className="inline mr-2 mb-1"
          />
          เข้าสู่ระบบด้วย Google
        </Button>
      </div>
      <Button variant="outline">
        <Link href="/user">User</Link>
      </Button>
    </div>
  )
}

export default Home
