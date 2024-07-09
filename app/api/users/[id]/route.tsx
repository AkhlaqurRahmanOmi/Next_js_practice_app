import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

import schema from "../schema";

//for get a single object
export async function GET(request: NextRequest,
    { params }: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) },
    })
    if (!user) {
        return NextResponse.json({ error: "user not found" }, { status: 404 })
    }
    return NextResponse.json(user)
}




// update a single object
export async function PUT(request: NextRequest,
    { params }: { params: { id: string } }) {
    //validate the body
    const body = await request.json();

    //validating with zod & checking if the information is correct or not
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 404 })
    }

    // finding the user with prisma 
    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    })
    //validate the ID
    //user exist or not checking
    if (!user) {
        return NextResponse.json({ error: "user not found" }, { status: 404 })
    }
    // updating the user information with prisma

    const updatedUser = await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            name: body.name,
            email: body.email
        }
    })

    return NextResponse.json(updatedUser, { status: 200 })

}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }) {
    //checking the user exists or not
    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    })
    if (!user) {
        return NextResponse.json({ error: "user not found" }, { status: 404 })
    }
    //deleting the user
    const deleteUSer = await prisma.user.delete({
        where: { id: user.id }
    })
    return NextResponse.json({})
}
