import FrontSprocketNarrowSpline from "@/models/FrontSprocketNarrowSplineModel";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request, { params }: any) => {
  const { part } = params;
  const body = await req.json();

  const isDuplicate = await FrontSprocketNarrowSpline.exists({
    $or: [{ code: body.code }, { link: body.link }],
  });

  if (isDuplicate) {
    return new NextResponse(
      JSON.stringify({ message: "Code or Link already exists" }),
      {
        status: 409,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const newFrontSprocket = new FrontSprocketNarrowSpline(body);

  try {
    await connect();

    await newFrontSprocket.save();

    return new NextResponse("Front Sprocket has been added", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
