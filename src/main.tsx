import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ⚠️ Thêm React Router
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/DNY-sport">  {/* ⚠️ Thêm basename */}
    <App />
  </BrowserRouter>
);
