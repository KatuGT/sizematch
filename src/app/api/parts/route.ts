import { possibleParts } from "@/types-enums-interfaces/partEnum";
import connect from "@/utils/db";
import { partModelArray } from "@/utils/partModelsMap";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const url = new URL(req.url);

  const part = url.searchParams.get("part");

  const PartModel = partModelArray[part as possibleParts];

  try {
    await connect();

    const result = await PartModel.find();
    const count = await PartModel.countDocuments();

    const response = {
      result,
      count,
    };

    return new NextResponse(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.warn("Get product error", error);

    return new NextResponse("error", { status: 500 });
  }
};
