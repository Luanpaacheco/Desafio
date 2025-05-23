import teste from "../assets/logoTaurus.png";

interface CustomInputProps {
  placeholder?: string;
  icon?: React.ReactNode; // URL ou caminho da imagem do ícone
  widthClass?: string; // exemplo: "w-full", "w-64", "w-40" (opcional)
}

export const CustomInput: React.FC<CustomInputProps> = ({
  placeholder = "Digite aqui...",
  icon,
  widthClass = "'w-full sm:w-80 md:w-90 lg:w-100'",
}) => {
  return (
    <div
      className={`flex items-center border rounded-full px-6 py-3 bg-white ${widthClass}`}
    >
      {icon && <div className="text-gray-500 mr-3">{icon}</div>}
      <input
        type="text"
        placeholder={placeholder}
        className="flex-grow outline-none text-gray-700 leading-none py-1"
      />
    </div>
  );
};
