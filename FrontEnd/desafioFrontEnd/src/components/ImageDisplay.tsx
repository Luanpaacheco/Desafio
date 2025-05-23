import React from "react";
import Logo from "../assets/logoTaurus.png";

interface ImageDisplayProps {
  src?: string;
  alt?: string;
  className?: string;
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({
  src = Logo,
  alt = "",
  className = "",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full sm:w-80 md:w-96 lg:w-[25rem] h-auto object-contain ${className}`}
    />
  );
};
