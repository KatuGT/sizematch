"use client";
import { InputPartPost } from "@/Components/inputPartPost/InputPartPost";
import { FSSizeInput } from "@/utils/FSInputData";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FrontSprocketSVG from "../../../public/svgParts/FrontSprocket";
import InputSizeEntry from "@/Components/InputSizeEntry/InputSizeEntry";

import Chain from "../../../public/svgParts/Chain";
import FrontSprocketSideSVG from "../../../public/svgParts/FrontSprocketSide";

const AdminCrud = () => {
  interface partPostProps {
    [key: string]: string;
  }

  const [selectedPart, setSelectedPart] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: partPostProps) => console.log(data);

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

    setValue(name, value);
  };

  return (
    <div className="mx-auto my-5 flex flex-wrap  items-center justify-center gap-10">
      <div>
        <div className="mb-3">
          <label htmlFor="partList">Choose a motorcycle part:</label>

          <select
            name="choosenPart"
            id="partList"
            value={selectedPart}
            onChange={(e) => setSelectedPart(e.target.value)}
          >
            <option disabled>--Please choose an option--</option>
            <option value="frontSprocket">Front Sprocket</option>
            <option value="rearSrocket">Rear Srocket</option>
            <option value="connectingRod">Connecting Rod</option>
          </select>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <InputPartPost
            placeholder="JT Sprocket"
            id="make"
            label="Make"
            register={register}
            name="make"
          />
          <InputPartPost
            placeholder="31435"
            id="code"
            label="Code"
            register={register}
            name="code"
          />
          <InputPartPost
            placeholder="www.sizematch.com"
            id="link"
            label="Link"
            register={register}
            name="link"
            type="url"
          />

          {FSSizeInput.map((item) => {
            return (
              <InputPartPost
                register={register}
                key={item.inputName}
                placeholder={item.placeholder}
                id={item.inputName}
                label={item.label}
                name={item.inputName}
                className={item.className}
                handleHover={handleHover}
                handleMouseLeave={handleMouseLeave}
                onChange={handleFSChange}
              />
            );
          })}
          <button>Enviar</button>
        </form>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center">
        <div className="relative mx-20 mb-10 w-[300px] ">
          <InputSizeEntry
            placeholder="20.50"
            name="a_innerMinimumDiameter"
            value={frontSprocketSizes?.a_innerMinimumDiameter}
            onChange={handleFSChange}
            position="left-[-100px] top-[37%]"
          />

          <InputSizeEntry
            placeholder="23.50"
            name="b_innerTeeth"
            value={frontSprocketSizes?.b_innerTeeth}
            onChange={handleFSChange}
            position="right-[-95px] top-[28%]"
          />

          <InputSizeEntry
            placeholder="12"
            name="c_innerMaximumDiameter"
            value={frontSprocketSizes?.c_innerMaximumDiameter}
            onChange={handleFSChange}
            position="bottom-[-30px] left-[34%]"
          />

          <FrontSprocketSVG
            handleHover={handleHover}
            handleMouseLeave={handleMouseLeave}
            hoveredClass={hoverClass}
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-[52px]">
            <InputSizeEntry
              placeholder="8.5"
              name="d_width"
              value={frontSprocketSizes?.d_width}
              onChange={handleFSChange}
              position="bottom-[-35px] left-[-40%]"
            />
            <FrontSprocketSideSVG
              handleHover={handleHover}
              handleMouseLeave={handleMouseLeave}
              hoveredClass={hoverClass}
            />
          </div>

          <div className="relative w-[100px]">
            <input
              className={`borde-gray-200 absolute bottom-[5%] right-[-100%] w-[100px] rounded-md border border-solid bg-transparent px-1 text-white`}
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
      </div>
    </div>
  );
};

export default AdminCrud;
