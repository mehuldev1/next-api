import { productsDBConnect } from "@/lib/db";
import { Mongoose } from "mongoose";
import { NextResponse } from "next/server";


export function GET(){
    Mongoose.connect(productsDBConnect)
    return NextResponse.json({data:"data"},{status:200})
}
