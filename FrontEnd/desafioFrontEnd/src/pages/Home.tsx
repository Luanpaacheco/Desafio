import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../components/CustomButton";
import { CustomInput } from "../components/CustomInput";
import { ImageDisplay } from "../components/ImageDisplay";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlineIcon from "@mui/icons-material/LockOutline";
import { useLanguage } from "../LanguageContext";
import { strings } from "../../strings";
import { LanguageSwitch } from "../components/LanguageSwitch";

const Home = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function testando() {
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://vercel-back-taurus.vercel.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: inputEmail, password: inputPassword }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Erro no login");
        return;
      }

      const data = await response.json();
      // supondo que o token vem em data.token
      localStorage.setItem("token", data.token);
      navigate("/chat");
    } catch (error) {
      setErrorMessage("Erro no login");
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="w-full flex justify-start px-4 pt-3">
        <LanguageSwitch />
      </div>
      <ImageDisplay />
      <div className=" sm:w-80 md:w-90 lg:w-100 my-7">
        <p className="text-2xl font-bold flex justify-start">
          {strings[language].welcome}
        </p>
        <p className="text-sm flex justify-start text-gray-300">
          {strings[language].chatbotDescription}
        </p>
      </div>

      <CustomInput
        icon={<EmailOutlinedIcon fontSize="small" />}
        placeholder={strings[language].workEmail}
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
      />
      <CustomInput
        icon={<LockOutlineIcon fontSize="small" />}
        placeholder={strings[language].password}
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
        isPassword={true}
      />
      <CustomButton text="Login" color="blue" onClick={() => testando()} />
      {errorMessage && (
        <p className="text-red-500 text-center">{errorMessage}</p>
      )}
      <p className="text-sm flex justify-start text-gray-50 ">
        {strings[language].forgotPassword}
      </p>
    </div>
  );
};

export default Home;
