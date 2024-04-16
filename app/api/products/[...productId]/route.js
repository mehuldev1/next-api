import { NextResponse } from "next/server";
import mongoose from 'mongoose';
import { Product } from "@/lib/model/product";
import { productsDBConnect } from "@/lib/db";

export async function PUT(req, res){
    const payload = await req.json();
   
    const productId = res.params.productId;
    const filter = {_id:productId}

    await mongoose.connect(productsDBConnect)
    const result = await Product.findOneAndUpdate(filter,payload)
    return NextResponse.json({data: result}, { status: 200 });
}

export async function GET(req, res){
    const productId = res.params.productId;
    const record = {_id:productId}

    await mongoose.connect(productsDBConnect)
    const result = await Product.findById(record)
    return NextResponse.json(result, { status: 200 });
}

export async function DELETE(req, res){
    const productId = res.params.productId;
    const record = {_id:productId}

    await mongoose.connect(productsDBConnect)
    const result = await Product.deleteOne(record)
    return NextResponse.json(result, { status: 200 });
}