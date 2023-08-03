import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import { sizeColors } from "@/utils";
import React, { useEffect, useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface InputSizeEntryProps extends SVGProps {
  value?: string;
  name?: string;
  placeholder: string;
  position: string;
  error?: string;
  mainClass?: string;
  ligthColor: string;
  darkColor: string;
  isMilimeter?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  register?: UseFormRegister<any>;
}
const InputSizeEntry = ({
  value,
  name,
  placeholder,
  position,
  error,
  mainClass,
  darkColor,
  ligthColor,
  hoveredClass,
  isMilimeter = true,
  onChange,
  register,
  onMouseEnter,
  onMouseLeave,
}: InputSizeEntryProps) => {
  return (
    <div
      className={`${mainClass} absolute ${position} `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <label className="relative">
        <input
          type="text"
          className={`${mainClass} ${
            hoveredClass === mainClass ? ligthColor : darkColor
          } flex w-[90px] flex-col rounded-md border border-solid bg-slate-950 px-1  focus:border-slate-600 focus:shadow-md focus:outline-slate-700 focus-visible:outline-slate-700 laptop:w-[100px]`}
          placeholder={placeholder}
          name={name}
          value={value?.replace(/[^0-9.]/g, "") || ""}
          onChange={onChange}
          {...(register && name && { ...register(name) })}
        />
        {isMilimeter && (
          <span
            className={`textp absolute right-1 top-[1px] ${
              !value ? "text-gray-400" : "text-white"
            } bg-slate-950`}
          >
            mm
          </span>
        )}
      </label>
      {error && (
        <span className="absolute -bottom-3 text-xs leading-[.1rem] text-red-600">
          {error}
        </span>
      )}
    </div>
  );
};

export default InputSizeEntry;
