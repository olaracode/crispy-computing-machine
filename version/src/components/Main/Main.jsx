import { useState, useRef } from "react";
import "./Main.css";
import ClubCard from "../ClubCard/ClubCard";

function Main({ onFavoriteClick, initialCards, favoriteCards, findCourts }) {
  const [city, setCity] = useState("");
  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const inputRef = useRef(null);

  const handleCityChange = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
    if (e.target.value.length < 2) {
      inputRef.current.setCustomValidity("Please input a city.");
      setErrorMessage("Please input a city.");
    } else {
      inputRef.current.setCustomValidity("");
      setErrorMessage("");
    }
  };
  function formReset() {
    setCity("");
  }

  const  handleSubmit = async (e) => {
    e.preventDefault();
    formReset();
    const courts = await findCourts();
    console.log(courts);
    setCards(courts);
  };
  console.log(cards);
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
              ref={inputRef}
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
                key={item.id}
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
