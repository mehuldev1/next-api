import { userDetails } from "@/app/utility/db";
import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json(userDetails,{status:200})
}

export async function POST(request){
    let payload = await request.json()
    console.log(payload)
    return NextResponse.json({result:'hello'})
}