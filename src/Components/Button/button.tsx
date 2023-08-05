import { type } from "os";
import React from "react";

interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: any;
  disabled?: boolean;
}

export const Button = ({
  text,
  type,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-[fit-content] self-center rounded-full border border-solid border-white bg-white px-7 py-2 text-black hover:bg-white hover:font-bold hover:text-black "
    >
      {text}
    </button>
  );
};
