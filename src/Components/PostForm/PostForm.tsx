import React, { useContext, useEffect, useState } from "react";
import { Button } from "../Button/button";
import { InputPartPost } from "../inputPartPost/InputPartPost";
import { FSSizeInput, InputItemFS } from "@/utils/FSInputData";
import { RSSizeInput } from "@/utils/RSInputData";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputSizeEntry from "../InputSizeEntry/InputSizeEntry";
import FrontSprocketSVG from "../../../public/svgParts/FrontSprocket";
import FrontSprocketSideSVG from "../../../public/svgParts/FrontSprocketSide";
import Chain from "../../../public/svgParts/Chain";
import { spawn } from "child_process";

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

  const commonSchema = {
    make: yup.string().trim().max(20, "Too long").required("Required"),
    code: yup.string().trim().max(20, "Too long").required("Required"),
    link: yup.string().trim().max(150, "Too long").url().required("Required"),
  };

  const frontSprocketSchema = {
    a_innerMinimumDiameter: yup
      .string()
      .matches(/^\d*\.?\d+$/, "Invalid number")
      .trim()
      .max(6, "Enter a valid value")
      .required("Required"),
    b_innerTeeth: yup
      .string()
      .matches(/^\d*\.?\d+$/, "Invalid number")
      .trim()
      .max(2, "Enter a valid value")
      .required("Required"),
    c_innerMaximumDiameter: yup
      .string()
      .matches(/^\d*\.?\d+$/, "Invalid number")
      .trim()
      .max(6, "Enter a valid value")
      .required("Required"),
    d_width: yup
      .string()
      .matches(/^\d*\.?\d+$/, "Invalid number")
      .trim()
      .max(4, "Enter a valid value")
      .required("Required"),
    e_chain: yup
      .string()
      .matches(/^\d*\.?\d+$/, "Invalid number")
      .trim()
      .max(3, "Enter a valid value")
      .required("Required"),
  };

  const generateSchema = (additionalSchema: any) => {
    return yup.object().shape({
      ...commonSchema,
      ...additionalSchema,
    });
  };

  const frontSprocketCompleteSchema = generateSchema(frontSprocketSchema);

  interface partPostProps {
    [key: string]: string;
  }

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(frontSprocketCompleteSchema),
    mode: "all",
  });

  const onSubmit = (data: partPostProps) => {
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  justify-center gap-10"
      >
        <div className="flex flex-col gap-3">
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
              <option value={possibleParts.frontSprocket}>
                Front Sprocket
              </option>
              <option value={possibleParts.rearSprocket}>Rear Sprocket</option>
            </select>
          </div>
          <Controller
            control={control}
            name="make"
            render={({ field: { onChange, value } }) => (
              <InputPartPost
                onChange={onChange}
                value={value}
                placeholder="JT Sprocket"
                id="make"
                label="Make"
                error={errors?.make?.message?.toString()}
              />
            )}
          />
          <Controller
            control={control}
            name="code"
            render={({ field: { onChange, value } }) => (
              <InputPartPost
                onChange={onChange}
                value={value}
                placeholder="31435"
                id="code"
                label="Code"
                error={errors?.code?.message?.toString()}
              />
            )}
          />
          <Controller
            control={control}
            name="link"
            render={({ field: { onChange, value } }) => (
              <InputPartPost
                onChange={onChange}
                value={value}
                placeholder="www.sizematch.com"
                id="link"
                label="Link"
                type="url"
                error={errors?.link?.message?.toString()}
              />
            )}
          />
        </div>
        <div className="flex  flex-wrap items-center justify-center mb-10">
          <div className="relative mr-32 w-[300px] ">
            <Controller
              control={control}
              name="a_innerMinimumDiameter"
              render={({ field: { onChange, value } }) => (
                <InputSizeEntry
                  onChange={onChange}
                  value={value}
                  placeholder="15.50"
                  position="left-[-100px] top-[37%]"
                  error={errors?.a_innerMinimumDiameter?.message?.toString()}
                />
              )}
            />
            <Controller
              control={control}
              name="b_innerTeeth"
              render={({ field: { onChange, value } }) => (
                <InputSizeEntry
                  onChange={onChange}
                  value={value}
                  placeholder="12"
                  position="right-[-95px] top-[28%]"
                  error={errors?.b_innerTeeth?.message?.toString()}
                />
              )}
            />
            <Controller
              control={control}
              name="c_innerMaximumDiameter"
              render={({ field: { onChange, value } }) => (
                <InputSizeEntry
                  onChange={onChange}
                  value={value}
                  placeholder="20.50"
                  position="bottom-[-30px] left-[34%]"
                  error={errors?.c_innerMaximumDiameter?.message?.toString()}
                />
              )}
            />

            <FrontSprocketSVG />
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-[52px]">
              <Controller
                control={control}
                name="d_width"
                render={({ field: { onChange, value } }) => (
                  <InputSizeEntry
                    onChange={onChange}
                    value={value}
                    placeholder="8.5"
                    position="bottom-[-35px] left-[-40%]"
                    error={errors?.d_width?.message?.toString()}
                  />
                )}
              />
              <FrontSprocketSideSVG />
            </div>

            <div className="relative mr-10 w-[100px]">
              <Controller
                control={control}
                name="e_chain"
                render={({ field: { onChange, value } }) => (
                  <div className=" absolute bottom-[5%] right-[-100%] flex flex-col">
                    <input
                      onChange={onChange}
                      value={value?.replace(/[^0-9.]/g, "") || ''}
                      className={`borde-gray-200 w-[100px] rounded-md border border-solid bg-transparent px-1 text-white`}
                      placeholder="520"
                      list="chain"
                    />
                    <datalist id="chain">
                      <option value="532" />
                      <option value="530" />
                      <option value="525" />
                      <option value="520" />
                      <option value="428" />
                    </datalist>
                    {errors?.e_chain?.message && (
                      <span className="absolute bottom-[-20px] text-xs text-red-600">
                        {errors?.e_chain?.message.toString()}
                      </span>
                    )}
                  </div>
                )}
              />
              <Chain />
            </div>
          </div>
        </div>
        <Button text="Send" />
      </form>
    </div>
  );
};

export default PostForm;
