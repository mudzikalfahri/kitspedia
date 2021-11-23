import React from "react";
import { Link } from "react-router-dom";

function LeagueCard({ item }) {
  return (
    <Link to={`/league?name=` + item.slug}>
      <div className="clickable-league">
        <img src={item.img} alt="" />
        <div className="clickable-des">
          <p className="clickable-des-title">{item.name}</p>
          <p className="clickable-des-year">2020/2021</p>
          <div className="country">{item.country}</div>
        </div>
      </div>
    </Link>
  );
}

export default LeagueCard;
