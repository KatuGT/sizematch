import { SVGProps } from "@/types-enums-interfaces/SVGProps";
import React from "react";

interface InputForChartProps extends SVGProps {
  mainClass: string;
  ligthColor: string;
  darkColor: string;
  value: string;
  placeholder: string;
  label: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputForChart = ({
  darkColor,
  ligthColor,
  mainClass,
  onChange,
  value,
  label,
  placeholder,
  name,
  hoveredClass,
  onMouseEnter,
  onMouseLeave,
}: InputForChartProps) => {
  return (
    <label
      
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`${mainClass} ${
        hoveredClass === mainClass ? ligthColor : darkColor
      } custom-input-wrapper`}
    >
      <span className="custom-input-span">{label}</span>
      <input
        placeholder={placeholder}
        type="text"
        className="custom-input bg-slate-950 focus:outline-slate-700 focus:border-slate-600 focus:shadow-md focus-visible:outline-slate-700"
        name={name}
        value={value}
        onChange={onChange}
        maxLength={5}
      />
    </label>
  );
};

export default InputForChart;
