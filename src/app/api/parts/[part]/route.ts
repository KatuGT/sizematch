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

export const POST = async (req: Request, { params }: any) => {
  const { part } = params;

  const body = await req.json();

  const { code } = body;
  console.log(code);

  const PartModel = partModelArray[part as possibleParts];

  if (!PartModel) {
    return new NextResponse("Invalid part", { status: 400 });
  }

  const codeExist = await PartModel.findOne({ code });

  if (codeExist) {
    return new NextResponse(`The code ${code} already exist.`, { status: 400 });
  }

  const newPart = new PartModel(body);

  try {
    await connect();

    await newPart.save();

    return new NextResponse(JSON.stringify(newPart), { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
