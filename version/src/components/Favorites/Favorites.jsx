import "./Favorites.css";
import ClubCard from "../ClubCard/ClubCard";

function Favorites({ favoriteClubs, onFavoriteClick, favoriteCards }) {
  console.log(favoriteClubs);
  return (
    <div className="favorite">
      <h2 className="favorite__title">Your Favorite Clubs</h2>
      <ul className="favorite__list">
        {favoriteClubs.map((item) => {
          return (
            <ClubCard
              key={item.name}
              item={item}
              onFavoriteClick={onFavoriteClick}
              favoriteCards={favoriteCards}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Favorites;
