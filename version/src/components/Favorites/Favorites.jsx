import "./Favorites.css";
import ClubCard from "../ClubCard/ClubCard";

function Favorites({ favoriteClubs, onFavoriteClick, favoriteCards }) {
  console.log(favoriteClubs);
  const isEmptyArray = favoriteClubs.length === 0;
  console.log(isEmptyArray);
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
                key={item.name}
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
