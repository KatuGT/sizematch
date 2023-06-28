import React from "react";

interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return <button className="border border-solid border-white text-black py-2 px-7 rounded-full w-[fit-content] self-center bg-white hover:bg-white hover:text-black hover:font-bold ">{text}</button>;
};

