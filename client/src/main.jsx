import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainRoutes from "./routes/MainRoutes.jsx";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <MainRoutes />
    </AuthContextProvider>
  </StrictMode>,
);
