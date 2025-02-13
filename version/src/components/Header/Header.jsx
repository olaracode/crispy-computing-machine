import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link">
          <h2 className="header__title">Find Your Court</h2>
        </Link>
      </div>
      <div className="header__container">
        <Link to="/favorites" className="header__link">
          <h2 className="header__favorite">Favorite Courts</h2>
        </Link>
      </div>
    </header>
  );
}

export default Header;
