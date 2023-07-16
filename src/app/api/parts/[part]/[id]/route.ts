import BrakeDisc from "@/models/BrakeDiscModel";
import ConnectingRod from "@/models/ConnectigRodModel";
import FrontSprocketLargeSpline from "@/models/FrontSprocketLargeSplineModel";
import FrontSprocketNarrowSpline from "@/models/FrontSprocketNarrowSplineModel";
import RearSprocket from "@/models/RearSprocketModel";
import PistonKit from "@/models/pistonKit";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import connect from "@/utils/db";
import { Model, Document } from "mongoose";
import { NextResponse } from "next/server";

type PartModel = Model<Document<any, any, any>, {}, {}, {}>;

const partModelArray: Record<possibleParts, PartModel> = {
  [possibleParts.FSLargeSpline]: FrontSprocketLargeSpline,
  [possibleParts.FSNarrowSpline]: FrontSprocketNarrowSpline,
  [possibleParts.RearSprocket]: RearSprocket,
  [possibleParts.BrakeDisc]: BrakeDisc,
  [possibleParts.ConnectingRods]: ConnectingRod,
  [possibleParts.PistonKit]: PistonKit,
};

export const DELETE = async (
  req: Request,
  { params }: { params: { part: string; id: string } }
) => {
  const { part, id } = params;

  const PartModel = partModelArray[part as possibleParts];

  if (!PartModel) {
    return new NextResponse("Invalid part", { status: 400 });
  }

  await PartModel.findByIdAndDelete(id);

  try {
    await connect();

    return new NextResponse(JSON.stringify("Deleted"), { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const GET = async (
  req: Request,
  { params }: { params: { part: string; id: string } }
) => {
  const { part, id } = params;

  const PartModel = partModelArray[part as possibleParts];

  if (!PartModel) {
    return new NextResponse("Invalid part", { status: 400 });
  }

  const singlePart = await PartModel.findById({ _id: id });

  try {
    await connect();

    return new NextResponse(JSON.stringify(singlePart), { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const PUT = async (
  req: Request,
  { params }: { params: { part: string; id: string } }
) => {
  const { part, id } = params;

  const PartModel = partModelArray[part as possibleParts];

  if (!PartModel) {
    return new NextResponse("Invalid part", { status: 400 });
  }
  const body = await req.json();

  const updatedPart = await PartModel.findByIdAndUpdate(id, body, {
    new: true,
  });

  try {
    await connect();

    return new NextResponse(JSON.stringify(updatedPart), { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
