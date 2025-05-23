import React from "react";
import { CustomButton } from "../components/CustomButton";

const ComponentTestPage = () => {
  return (
    <div className="h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="text-xl font-bold mb-4 text-white">
        Component Playground
      </h1>

      <CustomButton
        text="Testar Azul"
        color="blue"
        onClick={() => console.log("clicou azul")}
      />

      <CustomButton
        text="Login"
        color="darkBlue"
        width="w-26"
        onClick={() => alert("login")}
      />

      {/* Adicione mais testes aqui */}
    </div>
  );
};

export default ComponentTestPage;
