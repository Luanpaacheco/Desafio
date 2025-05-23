//botao normal mas so muda a cor e oq esta escrito
import React from "react";

interface CustomButtonProps {
  text: string;
  color?: "blue" | "green" | "red" | "gray"; // você pode expandir
  width?: string;
  onClick?: () => void;
}

const colorClasses: Record<string, string> = {
  blue: "bg-blue-600 hover:bg-blue-700",
  green: "bg-green-600 hover:bg-green-700",
  red: "bg-red-600 hover:bg-red-700",
  gray: "bg-gray-600 hover:bg-gray-700",
};

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  color = "blue",
  width = "w-full sm:w-40",
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        ${width}
        ${colorClasses[color]}
        text-white font-medium py-2 px-4 rounded transition-colors duration-300
      `}
    >
      {text}
    </button>
  );
};
