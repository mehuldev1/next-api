import mongoose from 'mongoose';
import { NextResponse } from "next/server";
import { productsDBConnect } from "@/lib/db";
import { Product } from '@/lib/model/product';

export async function GET(req, res) {
    try {
        await mongoose.connect(productsDBConnect);
        const data = await Product.find();
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error("Error connecting to database:", error);
        return NextResponse.error("Internal Server Error", { status: 500 });
    }
}
 
export async function POST(req, res){
    const payload = await req.json()
    try {
        await mongoose.connect(productsDBConnect)
        const product = new Product(payload)
        const result = await product.save()
        return NextResponse.json({result:result}, { status: 200 });
    } catch (error) {
        console.error("Error connecting to database:", error);
        return NextResponse.error("Internal Server Error", { status: 500 });
    }

    
}
