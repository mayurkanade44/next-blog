import User from "@/models/User";
import connect from "@/utils/db";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connect();

  try {
    const hashPassword = await hash(password, 5);
    const user = new User({ name, email, password: hashPassword });
    await user.save()
    return new NextResponse("User created", { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("server error", { status: 500 });
  }
};
