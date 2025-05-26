import React, { useState } from "react";
import { MessegeChat } from "../components/MessageChat";
import { CustomInput } from "../components/CustomInput";
import { CustomButton } from "../components/CustomButton";

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const messages = [
    { text: "Olá, como posso te ajudar?", isUser: false },
    { text: "Quero saber sobre inclusão.", isUser: true },
    { text: "Claro! Vamos conversar sobre isso.", isUser: false },
    { text: "Obrigado!", isUser: true },
    { text: "Olá, como posso te ajudar?", isUser: false },
    { text: "Quero saber sobre inclusão.", isUser: true },
    { text: "Claro! Vamos conversar sobre isso.", isUser: false },
    { text: "Obrigado!", isUser: true },
    { text: "Olá, como posso te ajudar?", isUser: false },
    { text: "Quero saber sobre inclusão.", isUser: true },
    { text: "Claro! Vamos conversar sobre isso.", isUser: false },
    { text: "Obrigado!", isUser: true },
    { text: "Olá, como posso te ajudar?", isUser: false },
    { text: "Quero saber sobre inclusão.", isUser: true },
    { text: "Claro! Vamos conversar sobre isso.", isUser: false },
    { text: "Obrigado!", isUser: true },
    { text: "Olá, como posso te ajudar?", isUser: false },
    { text: "Quero saber sobre inclusão.", isUser: true },
    { text: "Claro! Vamos conversar sobre isso.", isUser: false },
    { text: "Obrigado!", isUser: true },
    { text: "Olá, como posso te ajudar?", isUser: false },
    { text: "Quero saber sobre inclusão.", isUser: true },
    { text: "Claro! Vamos conversar sobre isso.", isUser: false },
    { text: "Obrigado!", isUser: true },
  ];

  return (
    <div className="flex flex-col h-screen">
      <div className="h-[9vh] flex items-center justify-end py-6 mb-5">
        <CustomButton text="Baixar PDF" color="darkBlue" width="" />
      </div>
      <div className="flex-1 overflow-y-auto flex flex-col-reverse px-2 gap-2 scrollbar-hide h-[90vh]">
        {messages.map((msg, idx) => (
          <MessegeChat key={idx} text={msg.text} isUser={msg.isUser} />
        ))}
      </div>
      <div className="pb-15 pt-5 flex justify-center items-center ">
        <CustomInput
          placeholder="work email"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Chat;
