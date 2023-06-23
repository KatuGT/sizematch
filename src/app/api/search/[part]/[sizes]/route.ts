import FrontSprocket from "@/models/FrontSprocketModel";
import connect from "@/utils/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

interface FSprops {
  [key: string]: string | RegExp;
}

const searchFrontSprocket = async (sizes: FSprops) => {
  const searchQuery: FSprops = {};

  for (const field in sizes) {
    if (sizes[field as keyof FSprops]) {
      searchQuery[field] = new RegExp(`^${sizes[field as keyof FSprops]}`);
    }
  }

  const frontSprockets = await FrontSprocket.find(searchQuery);

  return frontSprockets;
};

export const GET = async (req: NextApiRequest, { params }: any) => {
  await connect();

  const { sizes, part } = params;

  const searchParams = new URLSearchParams(sizes);
  const sizesObject: FSprops = {};

  for (const [key, value] of searchParams.entries()) {
    sizesObject[key] = value;
  }

  try {
    let searchResults: any;

    switch (part) {
      case "frontSprocket":
        searchResults = await searchFrontSprocket(sizesObject);
        break;
      default:
        return new NextResponse("Error getting the info", { status: 500 });
    }
    return new NextResponse(searchResults, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Error", { status: 500 });
  }
};
