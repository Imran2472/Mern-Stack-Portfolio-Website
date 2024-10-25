import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppState from "./Context/AppState.jsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppState>
      <StrictMode>
        <App />
      </StrictMode>
    </AppState>
  </BrowserRouter>
);
