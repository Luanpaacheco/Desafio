import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentTestPage from "./pages/ComponentTestPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponentTestPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
