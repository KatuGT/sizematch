"use client";
import React, { useState } from "react";
import FrontSprocketSVG from "../../../public/svgParts/FrontSprocket";
import Chain from "../../../public/svgParts/Chain";
import InputSizeEntry from "@/Components/InputSizeEntry/InputSizeEntry";
import Table from "@/Components/Table/Table";
import FrontSprocketSideSVG from "../../../public/svgParts/FrontSprocketSide";

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
    a_innerMinimumDiameter?: string;
    b_innerTeeth?: string;
    c_innerMaximumDiameter?: string;
    d_width?: string;
    e_chain?: string;
  }

  const [frontSprocketSizes, setFrontSprocketSizes] = useState<FSsizeProps>();

  const handleFSChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value.replace(/[^0-9.]/g, "");

    setFrontSprocketSizes((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const FrontSprocketTableData = [
    {
      displayName: "A",
      inputName: "a_innerMinimumDiameter",
      placeholder: "20.50",
      value: frontSprocketSizes?.a_innerMinimumDiameter,
      generalSize: "sizeA",
      baseColor: "text-sizeAcolor",
      hoverColor: "text-sizeAcolorLight",
    },
    {
      displayName: "B",
      inputName: "b_innerTeeth",
      placeholder: "23.50",
      value: frontSprocketSizes?.b_innerTeeth,
      generalSize: "sizeB",
      baseColor: "text-sizeBcolor",
      hoverColor: "text-sizeBcolorLight",
    },
    {
      displayName: "C",
      inputName: "c_innerMaximumDiameter",
      placeholder: "12",
      value: frontSprocketSizes?.c_innerMaximumDiameter,
      generalSize: "sizeC",
      baseColor: "text-sizeCcolor",
      hoverColor: "text-sizeCcolorLight",
    },
    {
      displayName: "D",
      inputName: "d_width",
      placeholder: "8.5",
      value: frontSprocketSizes?.d_width,
      generalSize: "sizeD",
      baseColor: "text-sizeDcolor",
      hoverColor: "text-sizeDcolorLight",
    },
    {
      displayName: "E",
      inputName: "e_chain",
      placeholder: "520",
      value: frontSprocketSizes?.e_chain,
      generalSize: "sizeE",
      baseColor: "text-sizeEcolor",
      hoverColor: "text-sizeEcolorLight",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mx-[100px] mb-24 flex flex-wrap items-center justify-center gap-24">
        <div className="relative w-[500px] ">
          <InputSizeEntry
            placeholder="20.50"
            name="a_innetDiameter"
            value={frontSprocketSizes?.a_innerMinimumDiameter}
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
            name="c_innerMaximumDiameter"
            value={frontSprocketSizes?.c_innerMaximumDiameter}
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
          <FrontSprocketSideSVG
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
        sizes={FrontSprocketTableData}
      />
    </div>
  );
};

export default FrontSprocket;
