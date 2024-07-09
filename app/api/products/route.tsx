import { NextRequest, NextResponse } from "next/server";

import schema from "./schema";
import prisma from "@/prisma/client";

//get function
export async function GET(request: NextRequest) {
    const products = await prisma.product.findMany()
    return NextResponse.json(
        products
    )
}


//implementing the put function
export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = await schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 404 });
    }

    const createProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price
        }
    })
    return NextResponse.json(createProduct)
}
