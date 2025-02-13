import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Favorites from "../Favorites/Favorites";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
