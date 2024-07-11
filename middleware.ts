import { NextRequest, NextResponse } from "next/server";

import middleware from "next-auth/middleware";

//custom middleware
// export function middleware( request: NextRequest){
//     return NextResponse.redirect(new URL('new_page', request.url));
// }

//next js build in middleware
export default middleware;

export const config = {
    // * : zero or more parameters

    matcher : ['/users/:id*', ]
}