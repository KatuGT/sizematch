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

export const GET = async (req: Request, { params }: any) => {
  const { part } = params;
 
  const PartModel = partModelArray[part as possibleParts];

  if (!PartModel) {
    return new NextResponse("Invalid part", { status: 400 });
  }

  const options = {
    bufferCommands: false,
    bufferTimeoutMS: 30000,
  };

  const parts = await PartModel.find().setOptions(options);
  console.log(parts);
  
  try {
    await connect();

    return new NextResponse(JSON.stringify(parts), { status: 201 });
  } catch (err) {
    console.log(err);

    return new NextResponse("Database Error", { status: 500 });
  }
};
