import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Favorites from "../Favorites/Favorites";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { initialCards } from "../../utils/HardCards";
import { FavoriteCardContext } from "../../contexts/FavoriteCardContext";

function App() {
  //useState
  const [favorites, setFavorite] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});

  const [favoriteCard, setFavoriteCard] = useState([]);

  //Global Functions

  const handleFavoriteClick = (favorite) => {
    const isFavorite = favorites.find((card) => card.id === favorite.id);

    if (!isFavorite) {
      setFavorite([favorite, ...favorites]);
    } else {
      setFavorite((favorites) =>
        favorites.filter((card) => card.id !== favorite.id)
      );
    }
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
                favoriteCards={favorites}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favoriteClubs={favorites}
                onFavoriteClick={handleFavoriteClick}
                favoriteCards={favorites}
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
