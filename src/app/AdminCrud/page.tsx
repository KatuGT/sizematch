"use client";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import FrontSprocketSVG from "../../../public/svgParts/FrontSprocket";
import InputSizeEntry from "@/Components/InputSizeEntry/InputSizeEntry";
import Chain from "../../../public/svgParts/Chain";
import FrontSprocketSideSVG from "../../../public/svgParts/FrontSprocketSide";
import PostForm from "@/Components/PostForm/PostForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";

const AdminCrud = () => {
  const { state, dispatch } = useContext(SharedValuesContext);
  const { frontSprocket } = state;

  const [hoverClass, setHoverClass] = useState("");

  // conecta el hover del svg con el formulario
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

  const handleFSChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value.replace(/[^0-9.]/g, "");

    dispatch({
      type: name,
      payload: newValue,
      group: "frontSprocket",
    });
  };

  return (
    <div className="mx-auto my-5 flex flex-wrap  items-center justify-center gap-10">
      <PostForm
        handleFSChange={handleFSChange}
        handleHover={handleHover}
        handleMouseLeave={handleMouseLeave}
      />
      <div className="flex flex-col flex-wrap items-center justify-center">
        <div className="relative mx-20 mb-10 w-[300px] ">
          <InputSizeEntry
            placeholder="15.50"
            name="a_innerMinimumDiameter"
            value={frontSprocket?.a_innerMinimumDiameter}
            onChange={handleFSChange}
            position="left-[-100px] top-[37%]"
          />

          <InputSizeEntry
            placeholder="12"
            name="b_innerTeeth"
            value={frontSprocket?.b_innerTeeth}
            onChange={handleFSChange}
            position="right-[-95px] top-[28%]"
          />

          <InputSizeEntry
            placeholder="20.50"
            name="c_innerMaximumDiameter"
            value={frontSprocket?.c_innerMaximumDiameter}
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
              value={frontSprocket?.d_width}
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
              value={frontSprocket?.e_chain || ""}
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
