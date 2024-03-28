import { userDetails } from "@/app/utility/db";
import { NextResponse } from "next/server";

export function GET(request){
    return NextResponse.json(userDetails,{status:200})
}