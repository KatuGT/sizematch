import { possibleParts } from "@/types-enums-interfaces/partEnum";
import connect from "@/utils/db";
import { partModelArray } from "@/utils/partModelsMap";
import { NextResponse } from "next/server";


export const POST = async (req: Request, { params }: any) => {
  const { part } = params;
  const body = await req.json();

  const { code } = body;

  const PartModel = partModelArray[part as possibleParts];

  console.log(part);


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
      console.warn(err.message);
      return new NextResponse(JSON.stringify(err.message), { status: 500 });
    } else {
      console.warn("Unexpected error on part/id", err);
    }
  }
};
