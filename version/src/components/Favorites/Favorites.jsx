import "./Favorites.css";
import ClubCard from "../ClubCard/ClubCard";

function Favorites({ favoriteClub, onFavoriteClick, isFavorite }) {
  console.log(favoriteClub);
  return (
    <div className="favorite">
      <h2 className="favorite__title">Your Favorite Clubs</h2>
      <ul className="favorite__list">
        {favoriteClub.map((item) => {
          return (
            <ClubCard
              key={item.name}
              item={item}
              onFavoriteClick={onFavoriteClick}
              isFavorite={isFavorite}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Favorites;
