import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="my-10 w-full md:max-w-2xl pt-44">
      <h1 className="text-4xl font-medium text-white text-center pb-20">
        Criando a sua conta...
      </h1>

      <form className="flex flex-col my-6">
        <label className="font-medium text-white">Nickname:</label>
        <input
          type="text"
          placeholder="Crie um nickname único para você..."
          className="w-full mb-5 p-2 rounded"
        />
        <label className="font-medium text-white">Password:</label>
        <input
          type="password"
          placeholder="Crie uma senha..."
          className="w-full mb-5 p-2 rounded"
        />
        <button
          type="submit"
          value="Entrar"
          className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium"
        >
          Criar conta e entrar
        </button>
      </form>
    </main>
  );
}

export default App;
