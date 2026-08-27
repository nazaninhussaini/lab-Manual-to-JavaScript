import { NextRequest, NextResponse } from "next/server";

export default function proxy(request :NextRequest){
    if(request.nextUrl.pathname === "/"){
        return NextResponse.redirect(new URL("/login",request.nextUrl));
    }
    return NextResponse.next();
}
// return NextResponse.redirect(new URL("/login",request.url));
// export const config ={
//     matcher :"/users"
// }