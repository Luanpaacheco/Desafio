import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CustomButton } from "./components/CustomButton"; // ajuste o caminho se necessário

const App = () => {
  const handleClick = () => {
    alert("Botão clicado!");
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <CustomButton
        text="Cadastrar"
        color="blue"
        width="w-full sm:w-48"
        onClick={handleClick}
      />
    </div>
  );
};

export default App;
