import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import IntroducePage from "./pages/Introduce/IntroducePage";
import BodyPage from "./pages/Body/BodyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/introduce" element={<IntroducePage />} />
        <Route path="/book/body" element={<BodyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
