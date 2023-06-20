"use client";
import React, { useRef, useState } from "react";
import "./frontSprocketStyle.css";
import FrontSprocketSVG from "../../../public/svgParts/FrontSprocket";
const FrontSprocket = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverClass, setHoverClass] = useState("");

  const handleHover = (e: React.MouseEvent) => {
    setHoverClass("hovered");
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    setHoverClass("");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[500px]">
        <FrontSprocketSVG handleHover={handleHover} handleMouseLeave={handleMouseLeave} hoverClass={hoverClass}/>
      </div>
      <div>
        <h1
          className={`sizeA ${hoverClass}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          // className={'sizeA'}
        >
          AAA
        </h1>
      </div>
    </div>
  );
};

export default FrontSprocket;
