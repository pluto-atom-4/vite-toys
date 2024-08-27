import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppMantine from "./AppMantine.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppMantine />
  </StrictMode>,
);
