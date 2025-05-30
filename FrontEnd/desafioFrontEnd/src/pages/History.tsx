import { useEffect, useState } from "react";
import { MessegeChat } from "../components/MessageChat";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { strings } from "../../strings";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  createdAt: string;
  userId: string;
}

const History = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const navigate = useNavigate();
  const { language } = useLanguage();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch("https://vercel-back-taurus.vercel.app/chat", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        setMessages(data.reverse()); // <- inverte a ordem aqui
      } catch (err) {
        console.error("Erro ao buscar histórico:", err);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="flex flex-col h-screen w-full px-4 py-2">
      <div className="h-[8vh] flex items-center">
        <button
          className="flex gap-2 items-center text-sm  cursor-pointer"
          onClick={() => navigate("/chat")}
        >
          <ArrowBackIcon />
          {strings[language].back}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col gap-3 mt-4 scrollbar-hide">
        {messages.map((msg) => (
          <MessegeChat key={msg.id} text={msg.text} isUser={msg.isUser} />
        ))}
      </div>
    </div>
  );
};

export default History;
