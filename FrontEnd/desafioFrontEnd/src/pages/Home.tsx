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

  function testando() {
    if (inputEmail != "testando") {
      setErrorMessage("Usuario ou senha invalido");
    } else {
      setErrorMessage("");
      navigate("/chat");
    }
    alert(`${inputEmail} and ${inputPassword}`);
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
      {errorMessage && ( // Mostra a mensagem de erro se houver
        <p className="text-red-500 text-center">{errorMessage}</p>
      )}
      <p className="text-sm flex justify-start text-gray-50 ">
        If you have forgotten your password, please contact the IT team.
      </p>
    </div>
  );
};

export default Home;
