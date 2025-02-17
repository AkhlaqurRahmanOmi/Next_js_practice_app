import prisma from "@/prisma/client";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})
export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors)
    }

    const user = await prisma.user.findUnique({
        where:
        {
            email: body.email

        }
    })

    if (user) {
        return NextResponse.json({ error: 'user already exists' })
    }
    const hashedPassword = await bcrypt.hash(body.password, 10)
    const newUser = await prisma.user.create({
        data: {
            email: body.email,
            password: hashedPassword
        }
    })
    return NextResponse.json({ email: newUser.email })
}