import FrontSprocket from "@/models/FrontSprocketModel";
import connect from "@/utils/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

interface FSprops {
  a_innerDiameter?: number;
  b_innerTeeth?: number;
  c_outerDiameter?: number;
  d_width?: number;
  e_chain?: number;
}

const searchFrontSprocket = async (sizes: FSprops) => {
  const frontSprockets = await FrontSprocket.find(sizes);
  console.log(frontSprockets);
  return frontSprockets;
};

export const GET = async (req: NextApiRequest, { params }: any) => {
  await connect();

  const { sizes } = params;

  const searchParams = new URLSearchParams(sizes);
  const sizesObject = {};

  for (const [key, value] of searchParams.entries()) {
    sizesObject[key] = value;
  }

  console.log(sizesObject);
  try {
    let searchResults: any;

    switch (params.part) {
      case "frontSprocket":
        console.log("hasta aqui");

        searchResults = await searchFrontSprocket(sizesObject);
        break;
      default:
        return new NextResponse("Error getting the info", { status: 500 });
    }
    return new NextResponse(searchResults, { status: 200 });
  } catch (error) {
    return new NextResponse("Error", { status: 500 });
  }
};
