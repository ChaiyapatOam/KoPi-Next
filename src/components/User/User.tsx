import React, { useCallback, useEffect, useState } from "react"
import type { Session } from "next-auth"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { UserModel } from "@/types"
import axios from "axios"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { ArrowLeftCircle, PencilLine } from "lucide-react"

type Props = {
  session: Session
}

const User: React.FC<Props> = ({ session }) => {
  const [user, setUser] = useState<UserModel>({
    id: "",
    email: "",
    name: "",
    phone: "",
    image: "",
  })

  const handleGetUser = useCallback(async (): Promise<void> => {
    try {
      const res = await axios.post(`/api/users`, { email: session.user?.email })

      if (res.status === 200) {
        console.log(res.data.data)
        setUser(res.data.data)
      }
    } catch (err) {}
  }, [session.user?.email])

  useEffect(() => {
    handleGetUser()
  }, [handleGetUser])

  return (
    <div className="p-4">
      <div className="flex mb-3">
        <Link href="/">
          <ArrowLeftCircle className="float-left" />
        </Link>
      </div>
      <Card className="flex flex-col justify-center">
        <CardHeader>
          <CardTitle className="flex justify-center">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.image} />
            </Avatar>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <h2 className="text-xl">{user.email}</h2>
            {!user.phone ? (
              <h1 className="font-bold text-red-500">โปรดกรอกเบอร์โทรศัพท์</h1>
            ) : (
              <h2 className="text-xl">{user.phone}</h2>
            )}
            {user.phone ? (
              <Image
                src={`https://promptpay.io/0630715705`}
                width={200}
                height={100}
                alt="promtpay"
              />
            ) : null}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/user/edit" className="font-bold">
            <Button className="flex gap-x-2">
              <PencilLine />
              แก้ไขข้อมูล
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default User
