import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Favorites from "../Favorites/Favorites";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { initialCards } from "../../utils/HardCards";
import { findCourts } from "../../utils/PlacesApi";
import PageNotFound from "../PageNotFound/PageNotFound";
import { getFavorites, addFavorite, removeFavorite } from "../../utils/api";
function App() {
  //useState
  const [favorites, setFavorite] = useState([]);

  //Global Functions

  const handleFavoriteClick = (favorite) => {
    const isFavorite = favorites.find(
      (card) => card.displayName === favorite.displayName
    );
    //const key = favorite.id;
    if (!isFavorite) {
      setFavorite([favorite, ...favorites]);
      //localStorage.setItem(key, favorite);
       addFavorite(favorite);
    } else {
      setFavorite((favorites) =>
        favorites.filter((card) => card.id !== favorite.id)
      );
      //localStorage.removeItem(key);
      removeFavorite(favorite.id);
    }
    console.log(localStorage);
  };

  useEffect(() => {
    getFavorites()
      .then((data) => {
        console.log(data);
        setFavorite(data);
      })
      .catch(console.error);
  }, []);

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
                findCourts={findCourts}
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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
