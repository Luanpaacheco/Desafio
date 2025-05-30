import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import History from "./pages/History";
import { PrivateRoute } from "./services/PrivateRoute";
import { LanguageProvider } from "./LanguageContext";
import LoadingScreen from "./pages/LoadingScreen";

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadingScreen />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <div className="flex justify-center">
                  <Chat />
                </div>
              </PrivateRoute>
            }
          />
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
