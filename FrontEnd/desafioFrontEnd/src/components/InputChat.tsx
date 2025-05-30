import React from "react";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

interface InputChatProps {
  placeholder?: string;
  icon?: React.ReactNode;
  widthClass?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  isDisable?: boolean;
}

export const InputChat: React.FC<InputChatProps> = ({
  placeholder = "Digite aqui...",
  widthClass = "w-full",
  value,
  onSend,
  onChange,
  isDisable = false,
}) => {
  return (
    <div
      className={`flex items-center border-2 rounded-2xl px-6 py-3  ${widthClass}`}
    >
      <input
        type={"text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !isDisable) {
            onSend();
          }
        }}
        className="flex-grow outline-none text-amber-50  py-1"
      />
      <button onClick={onSend} className="cursor-pointer" disabled={isDisable}>
        {isDisable ? <RestartAltIcon /> : <SendIcon fontSize="small" />}
      </button>
    </div>
  );
};
