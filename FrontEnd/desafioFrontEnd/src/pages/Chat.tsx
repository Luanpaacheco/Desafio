import { useState } from "react";
import { MessegeChat } from "../components/MessageChat";
import { InputChat } from "../components/InputChat";
import HistoryIcon from "@mui/icons-material/History";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { strings } from "../../strings";
import { LanguageSwitch } from "../components/LanguageSwitch";

declare global {
  interface Window {
    puter: any;
  }
}

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { text: strings[language].assistantGreeting, isUser: false },
  ]);

  const saveMessage = async (text: string, isUser: boolean) => {
    try {
      await fetch("http://localhost:5000/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ text, isUser }),
      });
    } catch (err) {
      console.error("Erro ao salvar mensagem:", err);
    }
  };

  const handleSend = async () => {
    if (!window.puter || !window.puter.ai) {
      console.error("Puter SDK ainda não carregada.");
      return;
    }
    if (!inputValue.trim()) return;
    setIsLoading(true);

    const userInput = inputValue;
    setInputValue("");

    const userMessage = { text: userInput, isUser: true };
    setMessages((prev) => [userMessage, ...prev]);
    await saveMessage(userInput, true);
    setIsLoading(true);

    try {
      const chatHistory = [
        ...messages
          .slice()
          .reverse()
          .map((msg) => ({
            role: msg.isUser ? "user" : "assistant",
            content: msg.text,
          })),
        { role: "user", content: userInput },
      ];

      const response = await window.puter.ai.chat(chatHistory);

      const aiMessage = {
        text: response.message.content,
        isUser: false,
      };

      setMessages((prev) => [aiMessage, ...prev]);
      setIsLoading(false);
      await saveMessage(aiMessage.text, false);
    } catch (err) {
      console.log(err);
      const errorMsg = {
        text: "Erro ao se comunicar com a IA.",
        isUser: false,
      };
      setMessages((prev) => [errorMsg, ...prev]);
      console.error("Erro com puter.ai.chat:", err);
    }
  };

  return (
    <div className="flex flex-col h-[100dvh] w-4xl justify-center ">
      <div className="w-full flex justify-between items-start px-4 pt-3 mb-5">
        <LanguageSwitch />
        <button
          className="flex gap-2 underline cursor-pointer align-middle"
          onClick={() => navigate("/history")}
        >
          {strings[language].chatHistory}
          <HistoryIcon />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col-reverse px-2 gap-3 scrollbar-hide ">
        {messages.map((msg, idx) => (
          <MessegeChat key={idx} text={msg.text} isUser={msg.isUser} />
        ))}
      </div>

      <div className=" pt-5 flex justify-center items-center ">
        <InputChat
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSend={handleSend}
          isDisable={isLoading}
          placeholder={strings[language].inputPlaceholder}
        />
      </div>
      <div>
        <p className="text-amber-50 pb-5 text-sm flex justify-center">
          {strings[language].disclaimer}
        </p>
      </div>
    </div>
  );
};

export default Chat;
