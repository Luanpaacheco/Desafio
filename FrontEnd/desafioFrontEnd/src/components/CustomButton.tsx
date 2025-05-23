//botao normal mas so muda a cor e oq esta escrito
import React from "react";

interface CustomButtonProps {
  text: string;
  color?: "blue" | "darkBlue";
  width?: string;
  onClick?: () => void;
}

const colorClasses: Record<string, string> = {
  blue: "bg-[#0575E6] hover:bg-[#0466C8]",
  darkBlue: "bg-[#0D3B66] hover:bg-[#145d8a]",
};

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  color = "blue",
  width = "'w-full sm:w-80 md:w-90 lg:w-100'",
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        ${width}
        ${colorClasses[color]}
        cursor-pointer
        text-white 
        font-medium 
        py-3 px-4 
        rounded-full 
        transition-colors duration-300
      `}
    >
      {text}
    </button>
  );
};
