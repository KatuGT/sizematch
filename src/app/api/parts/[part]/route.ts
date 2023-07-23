import BrakeDisc from "@/models/BrakeDiscModel";
import ConnectingRod from "@/models/ConnectigRodModel";
import FrontSprocketLargeSpline from "@/models/FrontSprocketLargeSplineModel";
import FrontSprocketNarrowSpline from "@/models/FrontSprocketNarrowSplineModel";
import RearSprocket from "@/models/RearSprocketModel";
import Valve from "@/models/ValveModel";
import PistonKit from "@/models/pistonKitModel";
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
  [possibleParts.Valve]: Valve,
};

export const POST = async (req: Request, { params }: any) => {
  const { part } = params;

  const body = await req.json();

  const { code } = body;

  const PartModel = partModelArray[part as possibleParts];

  if (!PartModel) {
    return new NextResponse("Invalid part", { status: 400 });
  }

  const codeExist = await PartModel.findOne({ code });

  if (codeExist) {
    return new NextResponse(JSON.stringify(`The code ${code} already exist.`), {
      status: 404,
    });
  }

  const newPart = new PartModel(body);

  try {
    await connect();

    await newPart.save();

    return new NextResponse(JSON.stringify(newPart), { status: 201 });
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);

      return new NextResponse(err.message, { status: 500 });
    } else {
      console.log("Unexpected error on part/id", err);
    }
  }
};
