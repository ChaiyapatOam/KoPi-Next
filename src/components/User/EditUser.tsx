import React, { useCallback, useEffect, useState } from "react"
import { ArrowLeftCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import axios from "axios"
import { UserModel } from "@/types"
import { Session } from "next-auth"

type Props = {
  session: Session
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "phone must be at least 10 characters.",
  }),
})

const EditUser: React.FC<Props> = ({ session }) => {
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
      console.log(res.data)

      if (res.status === 200) {
        console.log(res.data.data)
        setUser(res.data.data)
      }
    } catch (err) {}
  }, [session.user?.email])

  useEffect(() => {
    handleGetUser()
  }, [handleGetUser])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: user.name,
      phone: user.phone,
    },
  })
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <div className="p-4">
      <div className="flex mb-3">
        <Link href="/user">
          <ArrowLeftCircle className="float-left" />
        </Link>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default EditUser
