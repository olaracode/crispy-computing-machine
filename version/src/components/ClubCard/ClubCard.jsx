import { useState } from "react";
import "./ClubCard.css";

function ClubCard({ onFavoriteClick, item, isFavorite }) {
  //const handlLike = () => {
  //onCardLike(item);
  //};
  console.log(isFavorite);
  const handleFavoriteClick = () => {
    console.log(item);
    onFavoriteClick(item);
  };

  const favoriteCard = isFavorite.includes(item.name);

  const buttonClassName = favoriteCard
    ? "card__favorite card__favorite_active"
    : "card__favorite";

  //const isLiked = item.likes.includes(currentUser._id);
  //console.log(item);
  //console.log(isLiked);
  //

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
