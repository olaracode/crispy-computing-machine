import "./ClubCard.css";

function ClubCard() {
  //const handlLike = () => {
  //onCardLike(item);
  //};

  //const isLiked = item.likes.includes(currentUser._id);
  //console.log(item);
  //console.log(isLiked);
  //const favoriteButtonClassName = isFavorite
  //? "card__like card__like-button_active"
  //: "card__like";
  return (
    <li className="card">
      <img
        className="card__image"
        src="https://unsplash.com/photos/a-view-of-a-mountain-range-with-a-bird-flying-over-it-HwjwB7Zo77Y"
        alt="mountain"
      />
      <div className="card__description">
        <h2 className="card__text">Club</h2>
        <button className="card__favorite" type="button"></button>
      </div>
    </li>
  );
}

export default ClubCard;
