"use client";
import Image from "next/image";
import useSWR from "swr";
import valve from "../../../public/landingImg/valve.webp";
import FSLargeSpline from "../../../public/landingImg/FSLargeSpline.webp";
import FSNarrowSpline from "../../../public/landingImg/FSNarrowSpline.webp";
import BrakeDisc from "../../../public/landingImg/BrakeDisc.webp";
import ConnectingRod from "../../../public/landingImg/ConnectingRod.webp";
import RearSprocket from "../../../public/landingImg/rearSprocket.webp";
import Piston from "../../../public/landingImg/piston.webp";
import { possibleParts } from "@/types-enums-interfaces/partEnum";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type PartCounter = {
  part: possibleParts;
};

const PartCounter = ({ part }: PartCounter) => {

   const [data, setData] = useState<any[]>([]); 
      
    useEffect(() => {
      fetch(`/data/${part}.json`)
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((err) => console.error("Error cargando JSON:", err));
    }, [part]);

  const mappedParts = {
    [possibleParts.BrakeDisc]: "Brake Discs",
    [possibleParts.ConnectingRods]: "Connecting Rods",
    [possibleParts.RearSprocket]: "Rear Sprockets",
    [possibleParts.FSLargeSpline]: "Front Sprockets (Large Spline)",
    [possibleParts.FSNarrowSpline]: "Front Sprockets (Narrow Spline)",
    [possibleParts.PistonKit]: "Pisotn kit",
    [possibleParts.Valve]: "Valves",
  };

  const mappedImg = {
    [possibleParts.BrakeDisc]: BrakeDisc,
    [possibleParts.ConnectingRods]: ConnectingRod,
    [possibleParts.RearSprocket]: RearSprocket,
    [possibleParts.FSLargeSpline]: FSLargeSpline,
    [possibleParts.FSNarrowSpline]: FSNarrowSpline,
    [possibleParts.PistonKit]: Piston,
    [possibleParts.Valve]: valve,
  };

  const toHref =
    part === possibleParts.FSNarrowSpline ||
    part === possibleParts.FSLargeSpline
      ? "FrontSprocket"
      : part;

  const actualPartName = mappedParts[part as possibleParts];
  const partImage = mappedImg[part as possibleParts];

  return (
    <div >
      <Link href={`/${toHref}`} className="flex flex-col items-center">
        <figure className="relative rounded-full hover:animate-wiggle">
          <Image alt="valve" src={partImage} height={150} />
        </figure>
        <div
          style={{ backgroundColor: "rgba(0,0,0, 0.5)" }}
          className="relative top-[-40px] flex  w-[150px] flex-col rounded-md border border-solid border-blue-300 p-2 text-center backdrop-blur-sm"
        >
          <span className="whitespace-pre-line">{actualPartName}</span>
          <span className="text-xl font-bold">{data?.length} </span>
        </div>
      </Link>
    </div>
  );
};

export default PartCounter;
