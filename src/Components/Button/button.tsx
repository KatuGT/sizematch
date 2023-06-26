import React from "react";

interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return <button className="border border-solid border-white text-white py-2 px-7 rounded-full w-[fit-content] self-center hover:bg-white hover:text-black hover:font-bold ">{text}</button>;
};

