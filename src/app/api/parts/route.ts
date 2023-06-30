import FrontSprocketLargeSpline from "@/models/FrontSprocketLargeSplineModel";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();

    const FSLargeSpline = await FrontSprocketLargeSpline.find();

    return new NextResponse(FSLargeSpline, { status: 200 });
  } catch (error) {}
  return new NextResponse("error", { status: 500 });
};
