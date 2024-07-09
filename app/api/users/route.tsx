import { NextRequest, NextResponse } from "next/server";
// import { Prisma } from "@prisma/client"


import schema from "./schema";
import prisma from "@/prisma/client";
import { error } from "console";


//for all object of database
export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany()
    return NextResponse.json(users);
}




//for get a single object
// export function GET(request: NextRequest,
//     { params }: { params: { id: number } }) {

//     if (params.id > 10) {
//         return NextResponse.json({ error: "user not found" }, { status: 404 })
//     }
//     return NextResponse.json({ id: 1, name: "omi" })
// }


//creating post operation

export async function POST(request: NextRequest) {
    const body = await request.json();
    //validating with zod
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 404 })
    }
    //validating if there is already existing user
    const user = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })
    if (user) {
        return NextResponse.json({ error: "user already exists" }, { status: 404 })
    }
    //creating new user
    const newUser = await prisma.user.create({
        data: { name: body.name, email: body.email }
    })
    return NextResponse.json(newUser)
}