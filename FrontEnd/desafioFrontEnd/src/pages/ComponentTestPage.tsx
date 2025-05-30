import React, { useState } from "react";
import { CustomButton } from "../components/CustomButton";
import { CustomInput } from "../components/CustomInput";
import { ImageDisplay } from "../components/ImageDisplay";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { MessegeChat } from "../components/MessageChat";
import { useLanguage } from "../LanguageContext";
import { strings } from "../../strings";
import { LanguageSwitch } from "../components/LanguageSwitch";

const ComponentTestPage = () => {
  const [inputValue, setInputValue] = useState("");
  const { language } = useLanguage();

  function testando() {
    alert(inputValue);
  }

  return (
    <div className="h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-xl font-bold mb-4 text-white">
        Component Playground
      </h1>

      <LanguageSwitch />

      <h1 className="text-3xl font-bold mt-6">{strings[language].welcome}</h1>

      <CustomButton text="Login" color="blue" onClick={() => testando()} />

      <CustomButton
        text="Login"
        color="darkBlue"
        width="w-26"
        onClick={() => alert("login")}
      />

      <CustomInput
        placeholder="work emai"
        icon={<EmailOutlinedIcon fontSize="small" />}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <p>texto digitado: {inputValue}</p>

      <ImageDisplay className="-z-10" />

      <MessegeChat
        text="testeandooooooooooooooooooooooooooooooooooooooo"
        isUser={false}
      />

      {/* Adicione mais testes aqui */}
    </div>
  );
};

export default ComponentTestPage;
