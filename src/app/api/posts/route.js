import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);
  const email = url.searchParams.get("email");

  try {
    await connect();

    const posts = await Post.find(email && { email });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("server error", { status: 500 });
  }
};
