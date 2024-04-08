import { NextResponse } from "next/server";

export async function  GET(request, content){
    const studentDetails = content.params.dynamicroutes;
    const data = {
        result : studentDetails,
    }
    return NextResponse.json({data},{status:200})
}

export async function POST(request, content) {
    const requestBody = await request.json(); 
    const pageNnumber = requestBody.page_number;

    const responses = {
        1: "mehul",
        2: "kishan",
        3: "jay",
        4: "jaykush",
        5: "rahul",
    };

    const responseData = responses[pageNnumber] || "none";

    const data = {
        result: responseData, 
    };

    return NextResponse.json({ data }, { status: 200 });
}