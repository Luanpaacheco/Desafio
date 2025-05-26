import React from "react";

interface CustomInputProps {
  placeholder?: string;
  icon?: React.ReactNode;
  widthClass?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isPassword?: boolean;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  placeholder = "Digite aqui...",
  icon,
  widthClass = "'w-full sm:w-80 md:w-110 lg:w-150'",
  value,
  onChange,
  isPassword = false,
}) => {
  return (
    <div
      className={`flex items-center border rounded-full px-6 py-3 bg-white ${widthClass}`}
    >
      {icon && <div className="text-gray-500 mr-3">{icon}</div>}
      <input
        type={isPassword ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-grow outline-none text-gray-700 leading-none py-1"
      />
    </div>
  );
};
