import { findProductBySlug } from "@/db/models/product";
import { ProductModel } from "@/defs/TypeDefs";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _request: NextRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    const slug = params.slug;
    const product = await findProductBySlug(slug);

    return NextResponse.json(
      {
        statusCode: 200,
        message: "Success Get from Product",
        data: product,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
