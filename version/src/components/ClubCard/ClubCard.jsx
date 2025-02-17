import { useState } from "react";
import "./ClubCard.css";
import { FavoriteCardContext } from "../../contexts/FavoriteCardContext";
import { useContext } from "react";
import Favorites from "../Favorites/Favorites";

function ClubCard({ onFavoriteClick, item, favoriteCards }) {
  //const handlLike = () => {
  //onCardLike(item);
  //};

  const handleFavoriteClick = () => {
    //console.log(item.name);
    onFavoriteClick(item);
  };

  //const favoriteCard = useContext(FavoriteCardContext);
  const favoriteCard = favoriteCards.includes(item);

  const buttonClassName = favoriteCard
    ? "card__favorite card__favorite_active"
    : "card__favorite ";

  return (
    <li className="card" id={item.name}>
      <img className="card__image" src={item.link} alt={item.name} />
      <div className="card__description">
        <h2 className="card__text">{item.name}</h2>
        <button
          className={buttonClassName}
          type="button"
          onClick={handleFavoriteClick}
        ></button>
      </div>
    </li>
  );
}

export default ClubCard;
