import { FrontSprocketType } from "@/utils/FSInputData";
import { useEffect } from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

interface InputPartPostProps {
  id: string;
  label: string;
  name?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  error?: string;
  optionsArray?: any[];
  register?: UseFormRegister<any>;
  handleHover?: React.MouseEventHandler<HTMLTableCellElement>;
  handleMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
}

export const InputPartPost = ({
  id,
  label,
  name,
  type = "text",
  placeholder,
  className,
  value,
  error,
  register,
  handleHover,
  handleMouseLeave,
  onChange,
}: InputPartPostProps) => {
  return (
    <div>
      <div
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleHover}
        className={`${className} flex items-center justify-between rounded-full bg-white px-3 py-2`}
      >
        <label htmlFor={id} className="flex-1 font-bold">
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          className="rounded-e-full bg-transparent p-2 text-right"
          {...(register && name && { ...register(name) })}
          onChange={onChange}
          value={value}
        />
      </div>
      {error && <span className="ml-3 text-xs text-red-600">{error}</span>}
    </div>
  );
};

export const InputListPartPost = ({
  id,
  label,
  name,
  className,
  error,
  optionsArray,
  onChange,
}: InputPartPostProps) => {
  return (
    <div>
      <div
        className={`${className} flex items-center justify-between rounded-full bg-white px-3 py-2`}
      >
        <label htmlFor={id} className="flex-1 font-bold">
          {label}
        </label>
        <select
          className="flex w-[80%] items-center justify-between text-ellipsis rounded-full bg-white p-2.5  text-right font-bold mobile:w-[min-content]
          "
          name={name}
          id="partList"
          onChange={onChange}
        >
          <option disabled>--Please choose an option--</option>
          {optionsArray?.map((item) => (
            <option key={item.value} value={item.value}>
              {item.displayName}
            </option>
          ))}
        </select>
      </div>
      {error && <span className="ml-3 text-xs text-red-600">{error}</span>}
    </div>
  );
};
