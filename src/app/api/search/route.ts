// import FrontSprocket from "@/models/FrontSprocketModel";
// import connect from "@/utils/db";
// import { NextApiRequest, NextApiResponse } from "next";
// import { NextResponse } from "next/server";
// import { useSearchParams } from "next/navigation";

// interface FSprops {
//   a_innerDiameter?: number;
//   b_innerTeeth?: number;
//   c_outerDiameter?: number;
//   d_width?: number;
//   e_chain?: number;
// }

// const searchFrontSprocket = async (sizes: FSprops) => {
//   const frontSprockets = await FrontSprocket.find(sizes);
//   return frontSprockets;
// };

// export const GET = async (req: NextApiRequest,) => {
//   await connect();

//   const query = req.query || {};
//   console.log(query?.type);
//   try {

//   const searchParams = useSearchParams();

//   const search = searchParams.get("a_innerDiameter");

// const url = new URL(req.url);

// const type = url.searchParams.get("type");

// let searchResults: any;

// switch (params.part) {
//   case "frontSprocket":
//     console.log("hasta aqui");

//     // searchResults = await searchFrontSprocket("");
//     break;
//   default:
//     return new NextResponse("Error gettint the info", { status: 500 });
// }
//     return new NextResponse("maybe works", { status: 400 });
//   } catch (error) {
//     return new NextResponse("error", { status: 500 });
//   }
// };
