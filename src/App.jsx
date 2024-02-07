import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Libreria from "./pages/Libreria";
import Ia from "./pages/Ia";
import Web from "./pages/Web";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.classList.add("rounded-lg");
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/APMC.github.io" element={<Home></Home>}></Route>

          <Route path="/APMC.github.io/IA" element={<Ia />}></Route>
          <Route path="/APMC.github.io/Web" element={<Web />}></Route>
          <Route path="/APMC.github.io/Libreria" element={<Libreria />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
