import { useState } from "react";
import "./Main.css";
import ClubCard from "../ClubCard/ClubCard";

function Main({ onFavoriteClick, initialCards, favoriteCards, findCourts }) {
  const [city, setCity] = useState("");
  const [cards, setCards] = useState([]);
  const handleCityChange = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  };
  function formReset() {
    setCity("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    formReset();
    const cardData = [findCourts()];
    console.log(cardData);
    setCards(cardData);
  };
  const noClubCards = cards.length === 0;
  console.log(noClubCards);
  return (
    <main>
      <div className="main__form-container">
        <form className="main__form" onSubmit={handleSubmit}>
          <label htmlFor="City" className="main__label">
            <input
              type="City"
              className="main__input"
              id="City"
              placeholder="Your City"
              value={city}
              onChange={handleCityChange}
              required
            />
          </label>
          <button className="main__button">Let's Play!</button>
        </form>
      </div>
      {noClubCards ? (
        <div className="main__empty">
          <h2 className="main__description">Let's Find some Courts!</h2>
        </div>
      ) : (
        <ul className="cards__list">
          {cards.map((item) => {
            return (
              <ClubCard
                key={item.displayName}
                item={item}
                onFavoriteClick={onFavoriteClick}
                favoriteCards={favoriteCards}
              />
            );
          })}
        </ul>
      )}
    </main>
  );
}

export default Main;
