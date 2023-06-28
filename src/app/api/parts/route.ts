import FrontSprocket from "@/models/FrontSprocketModel";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();

  const newFrontSprocket = new FrontSprocket(body);

  try {
    await connect();

    await newFrontSprocket.save();

    return new NextResponse("Front Sprocket has been added", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
