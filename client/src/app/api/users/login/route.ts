import { NextResponse } from "next/server";

type ResponseAPIType<T> = {
  statusCode: number;
  message?: string;
  error?: string;
  data?: T; // Generic Type
};

export async function GET(request: Request) {
  // const user = await // ngambil dari model
  return NextResponse.json<ResponseAPIType<any>>(
    {
      statusCode: 200,
      message: `Berhasil dari Get`,
    },
    {
      status: 201,
    }
  );
}
