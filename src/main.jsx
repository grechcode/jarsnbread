import { createRoot } from "react-dom/client";
import "./assets/styles/main.css";
import App from "./App.jsx";
import { AppProvider } from "@/providers";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <App />
  </AppProvider>
);
