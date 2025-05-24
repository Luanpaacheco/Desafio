import React from "react";
import perfil from "../assets/perfilTaurusBranca.png";

interface MessegeChatProps {
  text: string;
  isUser?: boolean;
  avatarSrc?: string;
}

export const MessegeChat: React.FC<MessegeChatProps> = ({
  text,
  isUser = false,
  avatarSrc = perfil,
}) => {
  return (
    <div
      className={`flex items-end gap-2 mb-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && avatarSrc && (
        <img src={avatarSrc} alt="avatar" className="w-8 h-8 rounded-full" />
      )}

      <div
        className={`max-w-[75%] px-4 py-2 rounded-xl text-white text-sm break-words ${
          isUser
            ? "bg-[#0575E6] rounded-br-none"
            : "bg-[#2F2F32] rounded-bl-none"
        }`}
      >
        {text}
      </div>

      {isUser && avatarSrc && (
        <img src={avatarSrc} alt="avatar" className="w-8 h-8 rounded-full" />
      )}
    </div>
  );
};
