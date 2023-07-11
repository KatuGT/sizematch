import FrontSprocketLargeSpline from "@/models/FrontSprocketLargeSplineModel";
import FrontSprocketNarrowSpline from "@/models/FrontSprocketNarrowSplineModel";
import RearSprocket from "@/models/RearSprocketModel";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import connect from "@/utils/db";
import { Model, Document } from "mongoose";
import { NextResponse } from "next/server";

type PartModel = Model<Document<any, any, any>, {}, {}, {}>;

const partModelArray: Record<possibleParts, PartModel> = {
  [possibleParts.FSLargeSpline]: FrontSprocketLargeSpline,
  [possibleParts.FSNarrowSpline]: FrontSprocketNarrowSpline,
  [possibleParts.RearSprocket]: RearSprocket,
};

export const GET = async (req: Request) => {
  const url = new URL(req.url);

  const part = url.searchParams.get("part");

  const PartModel = partModelArray[part as possibleParts];

  try {
    await connect();

    const result = await PartModel.find();

    return new NextResponse(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.log("Get product error", error);

    return new NextResponse("error", { status: 500 });
  }
};
