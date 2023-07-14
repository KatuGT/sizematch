import BrakeDisc from "@/models/BrakeDiscModel";
import ConnectingRod from "@/models/ConnectigRodModel";
import FrontSprocketLargeSpline from "@/models/FrontSprocketLargeSplineModel";
import FrontSprocketNarrowSpline from "@/models/FrontSprocketNarrowSplineModel";
import RearSprocket from "@/models/RearSprocketModel";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import connect from "@/utils/db";
import { Model } from "mongoose";
import { NextResponse } from "next/server";

interface FSprops {
  [key: string]: string | RegExp;
}

const searchModel = async (
  Model: Model<any>,
  searchQuery: FSprops
): Promise<any> => {
  const results = await Model.find(searchQuery);

  return results;
};

export const GET = async (req: Request, { params }: any) => {
  await connect();

  const { sizes, part } = params;

  const searchParams = new URLSearchParams(sizes);

  // Convierte los parametros en objeto
  const sizesObject: FSprops = {};

  for (const [key, value] of searchParams.entries()) {
    sizesObject[key] = value;
  }

  // Convierte el "value" del objeto anterior en expresión Regex
  const searchQuery: FSprops = {};

  for (const field in sizesObject) {
    if (sizesObject[field as keyof FSprops]) {
      searchQuery[field] = new RegExp(
        `^${sizesObject[field as keyof FSprops]}`
      );
    }
  }

  try {
    let searchResult: any;
    switch (part) {
      case possibleParts.FSLargeSpline:
        searchResult = await searchModel(FrontSprocketLargeSpline, searchQuery);
        break;
      case possibleParts.FSNarrowSpline:
        searchResult = await searchModel(
          FrontSprocketNarrowSpline,
          searchQuery
        );
        break;
      case possibleParts.RearSprocket:
        searchResult = await searchModel(RearSprocket, searchQuery);
        break;
      case possibleParts.BrakeDisc:
        searchResult = await searchModel(BrakeDisc, searchQuery);
        break;
      case possibleParts.ConnectingRods:
        searchResult = await searchModel(ConnectingRod, searchQuery);
        break;
      default:
        break;
    }

    return new NextResponse(JSON.stringify(searchResult), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Error", { status: 500 });
  }
};
