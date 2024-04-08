import { userDetails } from "@/app/utility/db";
import { NextResponse } from "next/server";

export function GET(request,content){
    const userData = userDetails.filter(user=>user.id == content.params.userId)
    return NextResponse.json(userData.length > 0 ? userData[0] : 'No Data Found',{status:200})
}

export function DELETE(request, content) {
    const userData = userDetails.filter(user => user.id == content.params.userId);

    if (userData.length > 0) {
        console.log(userData.length);
        return NextResponse.json({
            result: 'Delete successfully',
        }, {
            status: 200
        });
    } else {
        console.log(userData.length);
        return NextResponse.json({
            result: 'Delete not successful',
        }, {
            status: 400
        });
    }
}


export async function PUT(request,content){
    let payload = await request.json();
    payload.id = content.params.userId
    if(!payload.name){
        return NextResponse.json({result: 'not valid data send'},{status:400})    
    }
    return NextResponse.json({result: 'data updated', data : {name : payload?.name,age : payload?.age}},{status:200})
}