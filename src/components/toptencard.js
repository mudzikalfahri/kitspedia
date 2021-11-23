import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

function TopTenCard({ item, rank }) {
  return (
    <Link to={"/jersey/" + item.club}>
      <div className="topten-card">
        <p className="number">{rank}</p>
        <img src={item.logo} alt="" />
        <img src={item.home.img} alt="" />
        <p className="club-topten">{item.club}</p>
        <p className="likes-count">
          <MdFavoriteBorder size="20" color="#fc7272" />
          <span>{item.views}</span>
        </p>
      </div>
    </Link>
  );
}

export default TopTenCard;
