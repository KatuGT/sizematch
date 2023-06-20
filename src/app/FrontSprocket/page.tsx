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

  const handleMouseLeave = () => {
    setHoverClass("");
  };

  interface FSsizeProps {
    a_innetDiameter?: number;
    b_innerTeeth?: number;
    c_outerDiameter?: number;
    d_chain?: number;
  }

  const [frontSrocketSizes, setFrontSrocketSizes] = useState<FSsizeProps>();

  const handleFSChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFrontSrocketSizes((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative mb-[80px] w-[500px]">
        <input
          type="text"
          placeholder="20.50"
          className="borde-gray-200 absolute left-[-100px] top-[39%] w-[100px] rounded-md border border-solid bg-transparent px-1 text-white"
          name="a_innetDiameter"
          value={frontSrocketSizes?.a_innetDiameter || ""}
          onChange={handleFSChange}
        />
        <input
          type="text"
          placeholder="23.50"
          className="borde-gray-200 absolute right-[-90px] top-[30%] w-[100px] rounded-md border border-solid bg-transparent px-1 text-white"
          name="b_innerTeeth"
          value={frontSrocketSizes?.b_innerTeeth || ""}
          onChange={handleFSChange}
        />

        <input
          type="text"
          placeholder="12"
          className="borde-gray-200 absolute  bottom-[-30px] left-[42%] w-[100px] rounded-md border border-solid bg-transparent px-1 text-white"
          name="c_outerDiameter"
          value={frontSrocketSizes?.c_outerDiameter || ""}
          onChange={handleFSChange}
        />
        <FrontSprocketSVG
          handleHover={handleHover}
          handleMouseLeave={handleMouseLeave}
          hoveredClass={hoverClass}
        />
      </div>
      <div className="overflow-hidden rounded-3xl border border-solid border-gray-100 ">
        <table className="border-spacing-0 overflow-hidden text-center">
          <thead>
            <tr className="border-b border-solid border-gray-200 text-white">
              <th className="w-32 p-5">Make</th>
              <th className="w-32 p-5">Code</th>
              <th
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
                className={`sizeA w-24 ${
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
                className={`sizeB w-24 p-5 ${
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
                className={`sizeC w-24 p-5 ${
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
                className={`sizeD w-24 p-5 ${
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
                    name="d_chain"
                    placeholder="12"
                    className="w-full bg-transparent text-center text-white"
                    onChange={handleFSChange}
                    value={frontSrocketSizes?.d_chain || ""}
                  />
                </label>
              </th>
              <th className="w-32 p-5">Link</th>
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
              <td className="p-4">www-com</td>
            </tr>

            <tr className="overflow-hidden bg-gray-800 text-white even:bg-gray-700">
              <td className="p-4">Prox</td>
              <td className="p-4">03-54535</td>
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
