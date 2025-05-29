import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../components/CustomButton";
import { CustomInput } from "../components/CustomInput";
import { ImageDisplay } from "../components/ImageDisplay";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";

const Home = () => {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function testando() {
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: inputEmail, password: inputPassword }),
      });

      if (!response.ok) {
        // se status diferente de 2xx, pega a mensagem de erro
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Erro no login");
        return;
      }

      const data = await response.json();
      // supondo que o token vem em data.token
      localStorage.setItem("token", data.token);
      navigate("/chat");
    } catch (error) {
      setErrorMessage("Erro de conexão");
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <ImageDisplay />
      <div className=" sm:w-80 md:w-90 lg:w-100 pl-3 my-7">
        <p className="text-2xl font-bold flex justify-start">
          Hello deployer!!!
        </p>
        <p className="text-sm flex justify-start text-gray-300">
          chatbot helps you w everything
        </p>
      </div>

      <CustomInput
        icon={<EmailOutlinedIcon fontSize="small" />}
        placeholder="work email"
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
      />
      <CustomInput
        icon={<KeyOutlinedIcon fontSize="small" />}
        placeholder="password"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
        isPassword={true}
      />
      <CustomButton text="Login" color="blue" onClick={() => testando()} />
      {errorMessage && (
        <p className="text-red-500 text-center">{errorMessage}</p>
      )}
      <p className="text-sm flex justify-start text-gray-50 ">
        If you have forgotten your password, please contact the IT team.
      </p>
    </div>
  );
};

export default Home;
