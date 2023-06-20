"use client";
import React, { useState } from "react";
import FrontSprocketSVG from "../../../public/svgParts/FrontSprocket";

const FrontSprocket = () => {
  const [hoverClass, setHoverClass] = useState("");

  const handleHover = (
    e: React.MouseEvent<
      SVGPathElement | SVGTextElement | HTMLHeadingElement,
      MouseEvent
    >
  ) => {
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
            hoverClass === "sizeA" ? "text-sizeAcolorLight" : "text-sizeAcolor"
          }`}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          Medida A
        </h1>

        <h1
          className={`sizeB ${
            hoverClass === "sizeB" ? "text-sizeBcolorLight" : "text-sizeBcolor"
          } `}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          Medida B
        </h1>

        <h1
          className={`sizeC ${
            hoverClass === "sizeC" ? "text-sizeCcolorLight" : "text-sizeCcolor"
          } `}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          Medida C
        </h1>
      </div>
    </div>
  );
};

export default FrontSprocket;
