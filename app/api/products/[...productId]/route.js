import { NextResponse } from "next/server";
import mongoose from 'mongoose';
import { Product } from "@/lib/model/product";
import { productsDBConnect } from "@/lib/db";

export async function PUT(req, res){
    const payload = await req.json();
   
    const productId = res.params.productId;
    const filter = {_id:productId}

    console.log(productId,filter,payload)
    await mongoose.connect(productsDBConnect)
    const result = await Product.findOneAndUpdate(filter,payload)
    return NextResponse.json({data: result}, { status: 200 });
}