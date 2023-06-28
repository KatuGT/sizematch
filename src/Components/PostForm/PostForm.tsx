import React, { useContext, useEffect, useState } from "react";
import { Button } from "../Button/button";
import { InputPartPost } from "../inputPartPost/InputPartPost";
import { FSSizeInput, InputItemFS } from "@/utils/FSInputData";
import { RSSizeInput } from "@/utils/RSInputData";
import { SharedValuesContext } from "@/Context/SharedValuesContext/SharedValuesContext";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
      .trim()
      .max(6, "Enter a valid value")
      .required("Required"),
    b_innerTeeth: yup
      .string()
      .trim()
      .max(2, "Enter a valid value")
      .required("Required"),
    c_innerMaximumDiameter: yup
      .string()
      .trim()
      .max(6, "Enter a valid value")
      .required("Required"),
    d_width: yup
      .string()
      .trim()
      .max(4, "Enter a valid value")
      .required("Required"),
    e_chain: yup
      .string()
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
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    control,
    watch,
  } = useForm({
    resolver: yupResolver(frontSprocketCompleteSchema),
    mode: "all",
  });

  const onSubmit = (data: partPostProps) => {
    trigger();
    console.log(data);
  };

  const { state, dispatch } = useContext(SharedValuesContext);
  const { frontSprocket } = state;

  console.log(watch());

  // useEffect(() => {

  //   dispatch({
  //     type: name,
  //     payload: newValue,
  //     group: "frontSprocket",
  //   });

  // }, [])

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: any
  ) => {
    onChange();
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
        <Controller
          control={control}
          name={"make"}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <InputPartPost
              placeholder="JT Sprocket"
              id="make"
              label="Make"
              // register={register}
              // name="make"
              onChange={onChange}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name={"code"}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <InputPartPost
              placeholder="31435"
              id="code"
              label="Code"
              // register={register}
              // name="code"
              onChange={onChange}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name={"link"}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <InputPartPost
              placeholder="www.sizematch.com"
              id="link"
              label="Link"
              // register={register}
              // name="link"
              type="url"
              onChange={onChange}
              value={value}
            />
          )}
        />

        {arratoToMap?.map((item: InputItemFS) => {
          return (
            <Controller
              key={item.inputName}
              control={control}
              name={item.inputName}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <InputPartPost
                  placeholder={item.placeholder}
                  id={item.inputName}
                  label={item.label}
                  // name={item.inputName}
                  className={item.className}
                  value={frontSprocket[item.inputName]}
                  // value={value}
                  register={register}
                  handleMouseLeave={handleMouseLeave}
                  onChange={(e) => {
                    onChange(e);
                    dispatch({
                      type: item.inputName,
                      payload: value,
                      group: "frontSprocket",
                    });
                  }}
                  handleHover={handleHover}
                />
              )}
            />
          );
        })}
        <Button text="Send" />
      </form>
    </div>
  );
};

export default PostForm;
