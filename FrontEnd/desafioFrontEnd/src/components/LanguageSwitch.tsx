// src/components/LanguageSwitch.tsx
import { useLanguage } from "../LanguageContext";

export const LanguageSwitch = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-5 w-1 bg-[#0575E6] text-white rounded-md hover:bg-blue-700 transition flex align-middle justify-center cursor-pointer"
    >
      {language === "pt" ? "PT" : "EN"}
    </button>
  );
};
