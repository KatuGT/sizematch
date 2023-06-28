import React from "react";
import { UseFormRegister } from "react-hook-form";

interface InputSizeEntryProps {
  value?: string;
  name?: string;
  placeholder: string;
  position: string;
  error?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  register?: UseFormRegister<any>;
}
const InputSizeEntry = ({
  value,
  name,
  placeholder,
  position,
  error,
  onChange,
  register,
}: InputSizeEntryProps) => {
  return (
    <div className={`borde-gray-200 absolute ${position} `}>
      <div className="relative">
        <input
          type="text"
          className={`flex w-[100px] flex-col rounded-md border border-solid bg-transparent px-1 text-white`}
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
