import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Favorites from "../Favorites/Favorites";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { initialCards } from "../../utils/HardCards";

function App() {
  //useState
  const [favorite, setFavorite] = useState([]);
  const [className, setClassName] = useState("");

  //Global Functions
  const handleFavoriteClick = (id) => {
    const isFavorite = favorite.includes(id);
    if (!isFavorite) {
      setFavorite([id, ...favorite]);
    } else {
      setFavorite((favorite) =>
        favorite.filter((item) => item.name !== item.name)
      );
    }
    console.log(favorite);
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                onFavoriteClick={handleFavoriteClick}
                initialCards={initialCards}
                isFavorite={favorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favoriteClub={favorite}
                onFavoriteClick={handleFavoriteClick}
                isFavorite={favorite}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
