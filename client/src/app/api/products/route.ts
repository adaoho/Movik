import { findAllProduct } from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const products = await findAllProduct({ page: 1, limit: 8 });

    return NextResponse.json(
      {
        statusCode: 200,
        message: "Success Get from Product",
        data: products,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
