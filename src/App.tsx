import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import IntroducePage from "./pages/Introduce/IntroducePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapter1" element={<IntroducePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
