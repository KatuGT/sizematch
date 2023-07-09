import { type } from "os";
import React from "react";

interface ButtonProps {
  text: string;
  type:  "button" | "submit" | "reset" | undefined
  onClick?: any
}

export const Button = ({ text, type, onClick }: ButtonProps) => {
  return <button type={type} onClick={onClick} className="border border-solid border-white text-black py-2 px-7 rounded-full w-[fit-content] self-center bg-white hover:bg-white hover:text-black hover:font-bold ">{text}</button>;
};

