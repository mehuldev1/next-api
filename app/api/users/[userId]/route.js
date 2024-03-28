import { userDetails } from "@/app/utility/db";
import { NextResponse } from "next/server";

export function GET(request,content){
    const userData = userDetails.filter(user=>user.id == content.params.userId)
    return NextResponse.json(userData.length > 0 ? userData[0] : 'No Data Found',{status:400})
}