import { NextRequest, NextResponse } from "next/server";

//for all object of database
// export function GET(request: NextRequest) {
//     return NextResponse.json([{ id: 1, name: "omi" }, { id: 2, name: "rahman" }, { id: 3, name: "blabla" },])
// }

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
    return NextResponse.json(body)
}