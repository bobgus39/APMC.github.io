import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Integrations from "./pages/Integrations";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="/Features" element={<Features />}></Route>
          <Route path="/Integrations" element={<Integrations />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
