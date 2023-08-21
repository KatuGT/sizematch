import { possibleParts } from "@/types-enums-interfaces/partEnum";
import connect from "@/utils/db";
import { partModelArray } from "@/utils/partModelsMap";
import { NextResponse } from "next/server";


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
