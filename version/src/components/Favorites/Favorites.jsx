import "./Favorites.css";
import ClubCard from "../ClubCard/ClubCard";
import { useEffect } from "react";
import { getFavorites } from "../../utils/api";

function Favorites({ favoriteClubs, onFavoriteClick, favoriteCards }) {
  const isEmptyArray = favoriteClubs.length === 0;

  

  return (
    <div className="favorite">
      <h2 className="favorite__title">Your Favorite Courts</h2>
      {isEmptyArray ? (
        <div className="favorite__empty">
          <h2 className="favorite__description">
            Fault! Add some favorite courts!
          </h2>
        </div>
      ) : (
        <ul className="favorite__list">
          {favoriteClubs.map((item) => {
            return (
              <ClubCard
                key={item.id}
                item={item}
                onFavoriteClick={onFavoriteClick}
                favoriteCards={favoriteCards}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
