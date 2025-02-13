import { useState } from "react";
import "./Main.css";
import ClubCard from "../ClubCard/ClubCard";

function Main() {
  const [city, setCity] = useState("");
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
    // renderCards();
  };

  return (
    <main>
      <div className="main__form-container">
        <form className="main__form" onSubmit={handleSubmit}>
          <label htmlFor="City" className="main__label">
            City{""}
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
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
      </ul>
    </main>
  );
}

export default Main;
