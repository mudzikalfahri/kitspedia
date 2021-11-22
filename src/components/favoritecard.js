import React from "react";
import "./favoritecard.css";

function FavoriteCard({ club, img, logo }) {
  return (
    <div className="club-img-favorite">
      <img src={img} alt="" className="jerseyimgimg" />
      <div className="jersey-type">
        <div className="jersey-type-img">
          <img src={logo} alt="logo" />
        </div>
        <p>{club}</p>
      </div>
    </div>
  );
}

export default FavoriteCard;
