import UserModel from "@/models/UserModel";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req: Request) => {
  const { email, name, password } = await req.json();

  await connect();

  const hashedPass = await bcrypt.hash(password, 5);
  const newUser = new UserModel({
    name,
    email,
    password: hashedPass,
  });
  try {
    await newUser.save();
    return new NextResponse("User has been created", { status: 201 });
  } catch (err) {
    if (err instanceof Error) {
      return new NextResponse(err.message, { status: 500 });
    } else {
      console.warn("Unexpected error on auth/register", err);
    }
  }
};
