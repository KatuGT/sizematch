import React from "react";

interface InputSizeEntryProps {
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  placeholder: string;
  position: string;
}
const InputSizeEntry = ({
  value,
  onChange,
  name,
  placeholder,
  position
}: InputSizeEntryProps) => {
  return (
    <input
      type="text"
      className={`borde-gray-200 absolute ${position} w-[100px] rounded-md border border-solid bg-transparent px-1 text-white`}
      placeholder={placeholder}
      name={name}
      value={value || ""}
      onChange={onChange}
    />
  );
};

export default InputSizeEntry;
