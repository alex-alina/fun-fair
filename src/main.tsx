import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Shapes } from "./shapes/Shapes.tsx";
import ThreePointsPage from "./threePointVis/ThreePointsPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/three-point-vis" element={<ThreePointsPage />} />
        <Route path="/shapes" element={<Shapes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
