import "./PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span> - Page Not Found!
      </h3>
      <Link to="/" className="not-found__link">
        <p className="not-found__text">Out! Second Serve.</p>
      </Link>
    </div>
  );
}

export default PageNotFound;
