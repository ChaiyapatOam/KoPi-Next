import { User } from "@/lib/prisma";
import { NextRequest } from "next/server";

export const findUser = async (req: NextRequest) => {
    try {
        const body = await req.json()

        const email = body.email
        if (!email) throw new Error("No Email Provide");
        const user = await User.findFirst({
            where: {
                email: email,
            },
        });
        console.log(user);

        return Response.json({ status: true, data: user })
    } catch (error) {
        return Response.json({ status: false })
    }
}

export const updateUser = async (req: NextRequest) => {
    try {
        const body = await req.json()

        const email = body.email
        if (!email) throw new Error("No Email Provide");
        const user = await User.update({
            where: {
                email: email,
            },
            data: {
                phone: body.phone
            }
        });
        console.log(user);

        return Response.json({ status: true, data: user })
    } catch (error) {
        return Response.json({ status: false })
    }
}