"use client";
import React, { useRef, useState } from "react";
import "./frontSprocketStyle.css";
import FrontSprocketSVG from "../../../public/svgParts/FrontSprocket";
const FrontSprocket = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverClass, setHoverClass] = useState("");

  const handleHover = (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
    const { classList } = e.target as HTMLElement;
    setHoverClass(classList[0]);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    setHoverClass("");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[500px]">
        <FrontSprocketSVG
          handleHover={handleHover}
          handleMouseLeave={handleMouseLeave}
          hoverClass={hoverClass}
          hoveredClass={hoverClass}
        />
      </div>
      <div>
        <h1
          className={`sizeA ${
            hoverClass === "sizeA" ? "text-[#3bc83b]" : "text-[#0c950c]"
          } `}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          Medida A
        </h1>

        <h1
          className={`sizeB ${hoverClass === "sizeB" ? "#yrllo" : "#0c950c"} `}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          Medida B
        </h1>
      </div>
    </div>
  );
};

export default FrontSprocket;
