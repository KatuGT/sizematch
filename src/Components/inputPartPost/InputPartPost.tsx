import { UseFormRegister, FieldValues } from "react-hook-form";

interface InputPartPostProps {
  id: string;
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  className?: string;
  value?: string
  register: UseFormRegister<FieldValues>;
  handleHover?: React.MouseEventHandler<HTMLTableCellElement>;
  handleMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onChange?: React.ChangeEventHandler<HTMLDivElement>;
}

export const InputPartPost = ({
  id,
  label,
  name,
  type = "text",
  placeholder,
  className,
  value,
  register,
  handleHover,
  handleMouseLeave,
  onChange,
}: InputPartPostProps) => {
  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleHover}
      className={`${className} flex items-center justify-between rounded-full bg-white px-3 py-2`}
    >
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className="max-w-[50%] rounded-e-full bg-transparent p-2 text-right"
        {...register(name)}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
