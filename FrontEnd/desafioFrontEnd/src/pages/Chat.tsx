import React, { useState } from "react";
import { MessegeChat } from "../components/MessageChat";
import { InputChat } from "../components/InputChat";
import { CustomButton } from "../components/CustomButton";

// Declaração da variável global Puter (com P maiúsculo)
declare global {
  interface Window {
    puter: any;
  }
}

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    { text: "Olá, como posso te ajudar?", isUser: false },
  ]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userInput = inputValue;
    setInputValue("");

    // adiciona a mensagem do usuário
    const userMessage = { text: userInput, isUser: true };
    setMessages((prev) => [userMessage, ...prev]);

    try {
      // prepara histórico de mensagens para enviar
      const chatHistory = [
        ...messages
          .slice() // faz uma cópia
          .reverse() // coloca na ordem original
          .map((msg) => ({
            role: msg.isUser ? "user" : "assistant",
            content: msg.text,
          })),
        { role: "user", content: userInput },
      ];

      // chamada ao puter.ai.chat
      const response = await window.puter.ai.chat(chatHistory);

      const aiMessage = {
        text: response.message.content,
        isUser: false,
      };

      setMessages((prev) => [aiMessage, ...prev]);
    } catch (err) {
      const errorMsg = {
        text: "Erro ao se comunicar com a IA.",
        isUser: false,
      };
      setMessages((prev) => [errorMsg, ...prev]);
      console.error("Erro com puter.ai.chat:", err);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="h-[9vh] flex items-center justify-end py-6 mb-5">
        <CustomButton text="Baixar PDF" color="darkBlue" width="" />
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col-reverse px-2 gap-3 scrollbar-hide h-[90vh]">
        {messages.map((msg, idx) => (
          <MessegeChat key={idx} text={msg.text} isUser={msg.isUser} />
        ))}
      </div>

      <div className="pb-15 pt-5 flex justify-center items-center ">
        <InputChat
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSend={handleSend}
        />
      </div>
    </div>
  );
};

export default Chat;
