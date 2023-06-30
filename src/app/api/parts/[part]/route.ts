import FrontSprocketLargeSpline from "@/models/FrontSprocketLargeSplineModel";
import FrontSprocketNarrowSpline from "@/models/FrontSprocketNarrowSplineModel";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import connect from "@/utils/db";
import { Model, Document } from "mongoose";
import { NextResponse } from "next/server";

type PartModel = Model<Document<any, any, any>, {}, {}, {}>;

const partModelArray: Record<possibleParts, PartModel> = {
  [possibleParts.FSLargeSpline]: FrontSprocketLargeSpline,
  [possibleParts.FSNarrowSpline]: FrontSprocketNarrowSpline,
};

export const POST = async (req: Request, { params }: any) => {
  const { part } = params;

  const body = await req.json();

  // Get the appropriate model based on the part
  const PartModel = partModelArray[part as possibleParts];

  if (!PartModel) {
    return new NextResponse("Invalid part", { status: 400 });
  }

  const newPart = new PartModel(body);

  try {
    await connect();

    await newPart.save();

    return new NextResponse("Front Sprocket has been added", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
