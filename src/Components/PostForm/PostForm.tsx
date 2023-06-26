import React, { useState } from "react";
import { InputPartPost } from "../inputPartPost/InputPartPost";
import { FSSizeInput } from "@/utils/FSInputData";
import { RSSizeInput } from "@/utils/RSInputData";
import { Button } from "../Button/button";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface FormProps {
  handleFSChange: React.ChangeEventHandler<HTMLInputElement>;
  handleMouseLeave: React.MouseEventHandler<HTMLDivElement>;
  handleHover: React.MouseEventHandler<HTMLDivElement>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: any;
}

const PostForm = ({
  handleHover,
  handleMouseLeave,
  handleFSChange,
  register,
  handleSubmit,
  onSubmit,
}: FormProps) => {
  // Cambia array que se mapea en el formulario
  enum possibleParts {
    frontSprocket = "frontSprocket",
    rearSprocket = "rearSprocket",
  }

//   const [selectedPart, setSelectedPart] = useState<possibleParts>(
//     possibleParts.frontSprocket
//   );

  const [arratoToMap, setArratoToMap] = useState<any[]>(FSSizeInput);

  const handleArrayToMap = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value as possibleParts;
    switch (selectedOption) {
      case possibleParts.frontSprocket:
        setArratoToMap(FSSizeInput);
        break;
      case possibleParts.rearSprocket:
        setArratoToMap(RSSizeInput);
        break;
      default:
        setArratoToMap([]);
        break;
    }
  };

  console.log(arratoToMap);

  return (
    <div>
      <div className="mb-3 flex flex-col ">
        <label htmlFor="partList" className="text-white">
          Choose a motorcycle part:
        </label>

        <select
          className="flex items-center justify-between rounded-full bg-white px-3 py-2"
          name="choosenPart"
          id="partList"
          onChange={handleArrayToMap}
        >
          <option disabled>--Please choose an option--</option>
          <option value={possibleParts.frontSprocket}>Front Sprocket</option>
          <option value={possibleParts.rearSprocket}>Rear Sprocket</option>
        </select>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-3"
      >
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

        {arratoToMap?.map((item) => {
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
        <Button text="Send" />
      </form>
    </div>
  );
};

export default PostForm;
