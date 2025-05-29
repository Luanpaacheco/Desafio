import React from "react";
import SendIcon from "@mui/icons-material/Send";

interface InputChatProps {
  placeholder?: string;
  icon?: React.ReactNode;
  widthClass?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  isPassword?: boolean;
}

export const InputChat: React.FC<InputChatProps> = ({
  placeholder = "Digite aqui...",
  widthClass = "w-full",
  value,
  onSend,
  onChange,
  isPassword = false,
}) => {
  return (
    <div
      className={`flex items-center border rounded-full px-6 py-3  ${widthClass}`}
    >
      <input
        type={isPassword ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-grow outline-none text-amber-400 leading-none py-1"
      />
      <button onClick={onSend} className="cursor-pointer">
        <SendIcon fontSize="small" />
      </button>
    </div>
  );
};
