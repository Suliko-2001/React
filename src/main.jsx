import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./assets/Header.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Header></Header>
  </StrictMode>,
);
