import React from "react";
import { Link } from "react-router-dom";
import "./favoritecard.css";

function FavoriteCard({ club, img, logo }) {
  return (
    <Link to={"/jersey/" + club}>
      <div className="club-img-favorite">
        <img src={img} alt="" className="jerseyimgimg" />
        <div className="jersey-type">
          <div className="jersey-type-img">
            <img src={logo} alt="logo" />
          </div>
          <p>{club}</p>
        </div>
      </div>
    </Link>
  );
}

export default FavoriteCard;
