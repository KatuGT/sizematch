import React, { useContext, useState } from "react";
import { InputPartPost } from "../inputPartPost/InputPartPost";
import { FSSizeInput, InputItemFS } from "@/utils/FSInputData";
import { RSSizeInput } from "@/utils/RSInputData";
import { Button } from "../Button/button";
import { useForm } from "react-hook-form";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";

interface FormProps {
  handleFSChange: React.ChangeEventHandler<HTMLInputElement>;
  handleMouseLeave: React.MouseEventHandler<HTMLDivElement>;
  handleHover: React.MouseEventHandler<HTMLDivElement>;
}

const PostForm = ({ handleHover, handleMouseLeave }: FormProps) => {
  // Cambia array que se mapea en el formulario
  enum possibleParts {
    frontSprocket = "frontSprocket",
    rearSprocket = "rearSprocket",
  }

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

  const { state, dispatch } = useContext(SharedValuesContext);
  const { frontSprocket } = state;

  interface partPostProps {
    [key: string]: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: partPostProps) => console.log(data);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValue = value.replace(/[^0-9.]/g, "");

    dispatch({
      type: name,
      payload: newValue,
      group: "frontSprocket",
    });
  };

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

        {arratoToMap?.map((item: InputItemFS) => {
          return (
            <InputPartPost
              key={item.inputName}
              placeholder={item.placeholder}
              id={item.inputName}
              label={item.label}
              name={item.inputName}
              className={item.className}
              value={frontSprocket[item.inputName]}
              register={register}
              handleMouseLeave={handleMouseLeave}
              onChange={handleFormChange}
              handleHover={handleHover}
            />
          );
        })}
        <Button text="Send" />
      </form>
    </div>
  );
};

export default PostForm;
