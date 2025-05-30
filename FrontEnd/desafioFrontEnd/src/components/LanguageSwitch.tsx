// src/components/LanguageSwitch.tsx
import { useLanguage } from "../LanguageContext";
import { FaGlobeAmericas } from "react-icons/fa";
import brasil from "../assets/brasil.png";
import brasilF from "../assets/brasil (1).png";
import eua from "../assets/estados-unidos.png";
import euaF from "../assets/estados-unidos (1).png";

import { GiBrazilFlag } from "react-icons/gi"; // ou uma imagem se preferir

export const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center bg-gray-200 rounded-full p-1 w-16 justify-between gap-1"
    >
      <div
        className={`w-7 h-7 flex items-center justify-center rounded-full transition-all ${
          language === "pt" ? "bg-white shadow" : ""
        }`}
      >
        <img src={language === "pt" ? brasil : brasilF} alt="" />
      </div>
      <div
        className={`w-7 h-7 flex items-center justify-center rounded-full transition-all ${
          language === "en" ? "bg-white shadow" : ""
        }`}
      >
        <img src={language === "en" ? eua : euaF} alt="" />
      </div>
    </button>
  );
};
