"use client";
import React, { useState } from "react";
import FrontSprocketSVG from "../../../public/svgParts/FrontSprocket";
import FrontSprocketside from "../../../public/svgParts/FrontSprocketSide";
import Chain from "../../../public/svgParts/Chain";
import InputSizeEntry from "@/Components/InputSizeEntry/InputSizeEntry";
import Table from "@/Components/Table/Table";

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

  const handleMouseLeave = () => {
    setHoverClass("");
  };

  interface FSsizeProps {
    a_innetDiameter?: number;
    b_innerTeeth?: number;
    c_outerDiameter?: number;
    d_width?: number;
    e_chain?: number;
  }

  const [frontSprocketSizes, setFrontSprocketSizes] = useState<FSsizeProps>();

  const handleFSChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFrontSprocketSizes((prev) => ({
      ...prev,
      [name]: Number(value.replace(/[^0-9.]/g, "")),
    }));
  };

  const size = [
    {
      displayName: "A",
      inputName: "a_innetDiameter",
      placeholder: "20.50",
      value: frontSprocketSizes?.a_innetDiameter,
    },
    {
      displayName: "B",
      inputName: "b_innerTeeth",
      placeholder: "23.50",
      value: frontSprocketSizes?.b_innerTeeth,
    },
    {
      displayName: "C",
      inputName: "c_outerDiameter",
      placeholder: "12",
      value: frontSprocketSizes?.c_outerDiameter,
    },
    {
      displayName: "D",
      inputName: "d_width",
      placeholder: "8.5",
      value: frontSprocketSizes?.d_width,
    },
    {
      displayName: "E",
      inputName: "e_chain",
      value: frontSprocketSizes?.e_chain,
      placeholder: "520",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mx-[100px] mb-24 flex flex-wrap items-center justify-center gap-24">
        <div className="relative w-[500px] ">
          <InputSizeEntry
            placeholder="20.50"
            name="a_innetDiameter"
            value={frontSprocketSizes?.a_innetDiameter}
            onChange={handleFSChange}
            position="left-[-100px] top-[39%]"
          />

          <InputSizeEntry
            placeholder="23.50"
            name="b_innerTeeth"
            value={frontSprocketSizes?.b_innerTeeth}
            onChange={handleFSChange}
            position="right-[-90px] top-[30%]"
          />

          <InputSizeEntry
            placeholder="12"
            name="c_outerDiameter"
            value={frontSprocketSizes?.c_outerDiameter}
            onChange={handleFSChange}
            position="bottom-[-30px] left-[42%]"
          />

          <FrontSprocketSVG
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
            hoveredClass={hoverClass}
          />
        </div>
        <div className="relative w-[89px] ">
          <InputSizeEntry
            placeholder="8.5"
            name="d_width"
            value={frontSprocketSizes?.d_width}
            onChange={handleFSChange}
            position="bottom-[-35px] left-[-5%]"
          />
          <FrontSprocketside
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
            hoveredClass={hoverClass}
          />
        </div>
        <div className="relative w-[150px]">
          <input
            className={`borde-gray-200 absolute bottom-[15%] right-[-70%] w-[100px] rounded-md border border-solid bg-transparent px-1 text-white`}
            placeholder="520"
            list="chain"
            name="e_chain"
            onChange={handleFSChange}
            value={frontSprocketSizes?.e_chain || ""}
          />
          <datalist id="chain">
            <option value="532" />
            <option value="530" />
            <option value="525" />
            <option value="520" />
            <option value="428" />
          </datalist>
          <Chain
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
            hoveredClass={hoverClass}
          />
        </div>
      </div>
      <Table
        handleFSChange={handleFSChange}
        handleHover={handleHover}
        handleMouseLeave={handleMouseLeave}
        hoverClass={hoverClass}
        sizes={size}
      />

    </div>
  );
};

export default FrontSprocket;
