import React from "react";
import perfil from "../assets/perfilTaurusBranca.png";

interface MessegeChatProps {
  text: string;
  isUser?: boolean;
  avatarSrc?: string;
}

function renderMarkdown(text: string) {
  let formatted = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  formatted = formatted.replace(/\*(.*?)\*/g, "<em>$1</em>");
  formatted = formatted.replace(/\n/g, "<br/>");
  formatted = formatted.replace(/^- (.*)/gm, "<li>$1</li>");
  formatted = formatted.replace(
    /(<li>.*<\/li>)/gms,
    "<ul class='list-disc ml-4'>$1</ul>"
  );

  return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
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
        className={`max-w-[50%] px-4 py-2 rounded-xl text-white text-sm break-words ${
          isUser
            ? "bg-[#0575E6] rounded-br-none"
            : "bg-[#2F2F32] rounded-bl-none"
        }`}
      >
        {renderMarkdown(text)}
      </div>

      {isUser && avatarSrc && (
        <img src={avatarSrc} alt="avatar" className="w-8 h-8 rounded-full" />
      )}
    </div>
  );
};
