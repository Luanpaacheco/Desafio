import React from "react";
import { CustomButton } from "../components/CustomButton";
import { CustomInput } from "../components/CustomInput";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

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

      <CustomInput
        placeholder="work emai"
        icon={<EmailOutlinedIcon fontSize="small" />}
      />

      {/* Adicione mais testes aqui */}
    </div>
  );
};

export default ComponentTestPage;
