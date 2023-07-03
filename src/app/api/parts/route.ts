import FrontSprocketLargeSpline from "@/models/FrontSprocketLargeSplineModel";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect();

    const FSLargeSpline = await FrontSprocketLargeSpline.find();
    console.log("Retrieved data:", FSLargeSpline);

    return new NextResponse(FSLargeSpline, { status: 200 });
  } catch (error) {
    console.log('Get product error', error);

    return new NextResponse("error", { status: 500 });
  }
};
