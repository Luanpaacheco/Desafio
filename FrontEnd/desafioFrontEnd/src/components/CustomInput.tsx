import React, { useState } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";

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
  widthClass = "w-full sm:w-60 md:w-90 lg:w-130",
  value,
  onChange,
  isPassword = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (isPassword) {
      setIsVisible((prev) => !prev);
    }
  };

  return (
    <div
      className={`flex items-center border rounded-2xl px-6 py-3 bg-white ${widthClass}`}
    >
      {icon && (
        <div className="text-gray-500 mr-3">
          <button
            className={isPassword ? "cursor-pointer " : ""}
            onClick={toggleVisibility}
          >
            {isVisible ? <LockOpenIcon fontSize="small" /> : icon}
          </button>
        </div>
      )}
      <input
        type={isPassword ? (isVisible ? "text" : "password") : "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-grow outline-none text-gray-700 leading-none py-1"
      />
    </div>
  );
};
