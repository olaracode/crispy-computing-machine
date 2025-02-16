import { useState } from "react";
import "./Main.css";
import ClubCard from "../ClubCard/ClubCard";

function Main({ onFavoriteClick, initialCards, isFavorite }) {
  const [city, setCity] = useState("");
  const [cards, setCards] = useState([]);
  const handleCityChange = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  };
  function formReset() {
    setCity("");
  }

  const handleSubmit = (e, initialCards) => {
    e.preventDefault();
    formReset();
    //setCards(cards, ...initialCards);
  };

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
      <ul className="cards__list">
        {initialCards.map((item) => {
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
    </main>
  );
}

export default Main;
