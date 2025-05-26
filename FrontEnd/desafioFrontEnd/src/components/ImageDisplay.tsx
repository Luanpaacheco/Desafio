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
      className={`w-40 sm:w-40 md:w-48 lg:w-[12rem] h-auto object-contain ${className}`}
    />
  );
};
