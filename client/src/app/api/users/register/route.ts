import { userRegister } from "@/db/models/users";
import { NextResponse } from "next/server";
import { z } from "zod";

type ResponseUserType<T> = {
  statusCode: number;
  message?: string;
  error?: string;
  data?: T; // Generic Type
};

const userInputSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  fullname: z.string().min(6),
});

export const POST = async (request: Request) => {
  console.log("sudah sampai sini");

  const data = await request.json();
  const parsedData = userInputSchema.safeParse(data);

  if (!parsedData.success) {
    throw parsedData.error;
  }

  const user = await userRegister(parsedData.data);

  return NextResponse.json<ResponseUserType<any>>(
    { statusCode: 200, message: `Berhasil Post`, data: user },
    { status: 201 }
  );
};
