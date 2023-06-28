"use client";
import { useContext, useState } from "react";
import FrontSprocketSVG from "../../../public/svgParts/FrontSprocket";
import InputSizeEntry from "@/Components/InputSizeEntry/InputSizeEntry";
import Chain from "../../../public/svgParts/Chain";
import FrontSprocketSideSVG from "../../../public/svgParts/FrontSprocketSide";
import PostForm from "@/Components/PostForm/PostForm";
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
    <div className="mx-auto my-5 ">
      <PostForm
        handleFSChange={handleFSChange}
        handleHover={handleHover}
        handleMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default AdminCrud;
