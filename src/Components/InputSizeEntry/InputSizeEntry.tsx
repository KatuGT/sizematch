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
  onChange,
  register,
  onMouseEnter,
  onMouseLeave,
}: InputSizeEntryProps) => {
 
  return (
    <div
      className={`${mainClass} first-letter:borde-gray-200 absolute ${position} `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative">
        <input
          type="text"
          className={`${mainClass} ${
            hoveredClass === mainClass ? ligthColor : darkColor
          } flex w-[70px] flex-col rounded-md border border-solid bg-slate-950 px-1  focus:border-slate-600 focus:shadow-md focus:outline-slate-700 focus-visible:outline-slate-700 laptop:w-[100px]`}
          placeholder={placeholder}
          name={name}
          value={value?.replace(/[^0-9.]/g, "") || ""}
          onChange={onChange}
          {...(register && name && { ...register(name) })}
        />
        {error && (
          <span className="absolute bottom-[-20px] text-xs text-red-600">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputSizeEntry;
