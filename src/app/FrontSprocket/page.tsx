"use client";
import React, { useState } from "react";
import FrontSprocketSVG from "../../../public/svgParts/FrontSprocket";
import FrontSprocketside from "../../../public/svgParts/FrontSprocketSide";
import Chain from "../../../public/svgParts/Chain";
import datalistSizeEntry from "@/Components/InputSizeEntry/InputSizeEntry";
import InputSizeEntry from "@/Components/InputSizeEntry/InputSizeEntry";

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

  const [frontSrocketSizes, setFrontSrocketSizes] = useState<FSsizeProps>();

  const handleFSChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFrontSrocketSizes((prev) => ({
      ...prev,
      [name]: Number(value.replace(/[^0-9.]/g, "")),
    }));
  };
  console.log(frontSrocketSizes);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-24 ml-[100px] flex flex-wrap items-center justify-center gap-24">
        <div className="relative w-[500px] ">
          <InputSizeEntry
            placeholder="20.50"
            name="a_innetDiameter"
            value={frontSrocketSizes?.a_innetDiameter}
            onChange={handleFSChange}
            position="left-[-100px] top-[39%]"
          />

          <InputSizeEntry
            placeholder="23.50"
            name="b_innerTeeth"
            value={frontSrocketSizes?.b_innerTeeth}
            onChange={handleFSChange}
            position="right-[-90px] top-[30%]"
          />

          <InputSizeEntry
            placeholder="12"
            name="c_outerDiameter"
            value={frontSrocketSizes?.c_outerDiameter}
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
            value={frontSrocketSizes?.d_width}
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
          <Chain
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
            hoveredClass={hoverClass}
          />
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl border border-solid border-gray-100 ">
        <table className="border-spacing-0 overflow-hidden text-center">
          <thead>
            <tr className="border-b border-solid border-gray-200 text-white">
              <th className="w-32 p-2">Make</th>
              <th className="w-32 p-2">Code</th>
              <th
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                className={`sizeA w-28 ${
                  hoverClass === "sizeA"
                    ? "text-sizeAcolorLight"
                    : "text-sizeAcolor"
                }`}
              >
                <label>
                  <span>A</span>
                  <input
                    pattern="^\d+(\.\d+)?$"
                    type="text"
                    name="a_innetDiameter"
                    placeholder="20.50"
                    className="w-full bg-transparent text-center text-white"
                    onChange={handleFSChange}
                    value={frontSrocketSizes?.a_innetDiameter || ""}
                  />
                </label>
              </th>
              <th
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                className={`sizeB w-28 p-2 ${
                  hoverClass === "sizeB"
                    ? "text-sizeBcolorLight"
                    : "text-sizeBcolor"
                }`}
              >
                <label>
                  <span>B</span>
                  <input
                    pattern="^\d+(\.\d+)?$"
                    type="text"
                    name="b_innerTeeth"
                    placeholder="23.50"
                    className="w-full bg-transparent text-center text-white"
                    onChange={handleFSChange}
                    value={frontSrocketSizes?.b_innerTeeth || ""}
                  />
                </label>
              </th>
              <th
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                className={`sizeC w-28 p-2 ${
                  hoverClass === "sizeC"
                    ? "text-sizeCcolorLight"
                    : "text-sizeCcolor"
                }`}
              >
                <label>
                  <span>C</span>
                  <input
                    pattern="^\d+(\.\d+)?$"
                    type="text"
                    name="c_outerDiameter"
                    placeholder="12"
                    className="w-full bg-transparent text-center text-white"
                    onChange={handleFSChange}
                    value={frontSrocketSizes?.c_outerDiameter || ""}
                  />
                </label>
              </th>
              <th
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                className={`sizeD w-28 p-2 ${
                  hoverClass === "sizeD"
                    ? "text-sizeDcolorLight"
                    : "text-sizeDcolor"
                }`}
              >
                <label>
                  <span>D</span>
                  <input
                    pattern="^\d+(\.\d+)?$"
                    type="text"
                    name="d_width"
                    placeholder="8.5"
                    className="w-full bg-transparent text-center text-white"
                    onChange={handleFSChange}
                    value={frontSrocketSizes?.d_width || ""}
                  />
                </label>
              </th>
              <th
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                className={`sizeE w-28 p-2 ${
                  hoverClass === "sizeE"
                    ? "text-sizeEcolorLight"
                    : "text-sizeEcolor"
                }`}
              >
                <label>
                  <span>E</span>
                  <input
                    placeholder="520"
                    className="w-full bg-transparent text-center text-white"
                    list="chain"
                    name="e_chain"
                    onChange={handleFSChange}
                    value={frontSrocketSizes?.e_chain || ""}
                  />
                  <datalist id="chain">
                    <option value="532" />
                    <option value="530" />
                    <option value="525" />
                    <option value="520" />
                    <option value="428" />
                  </datalist>
                </label>
              </th>
              <th className="w-32 p-2">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr className="overflow-hidden bg-gray-800 text-white even:bg-gray-700">
              <td className="p-4">Prox</td>
              <td className="p-4">03-54535</td>
              <td className="p-4">100</td>
              <td className="p-4">100</td>
              <td className="p-4">100</td>
              <td className="p-4">100</td>
              <td className="p-4">100</td>
              <td className="p-4">www-com</td>
            </tr>

            <tr className="overflow-hidden bg-gray-800 text-white even:bg-gray-700">
              <td className="p-4">Prox</td>
              <td className="p-4">03-54535</td>
              <td className="p-4">100</td>
              <td className="p-4">100</td>
              <td className="p-4">100</td>
              <td className="p-4">100</td>
              <td className="p-4">100</td>
              <td className="p-4">www-com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FrontSprocket;
