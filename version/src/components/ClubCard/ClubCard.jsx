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
    <li className="card" id={item.displayName}>
      <img className="card__image" src={item.photos} alt={item.displayName} />
      <div className="card__description">
        <h2 className="card__text">{item.displayName}</h2>
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
