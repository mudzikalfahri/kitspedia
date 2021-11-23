import React from "react";
import { Link } from "react-router-dom";

function ClubCardByLeague({ item }) {
  return (
    <Link to={"/jersey/" + item.club}>
      <div className="clubcard">
        <img src={item.home.img} alt="" />
        <div className="detail-clubcard">
          <div className="clubcard-name">
            <img src={item.logo} alt="" />
            <p>{item.club}</p>
          </div>
          <p className="apparel">{item.apparel}</p>
          <p className="season">2020/2021</p>
        </div>
      </div>
    </Link>
  );
}

export default ClubCardByLeague;
