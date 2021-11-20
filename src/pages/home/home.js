import React from "react";
import "./home.css";
import { FiSearch } from "react-icons/fi";

function Home() {
  const league = [
    { name: "Premier League", img: "/premier.png" },
    { name: "Ligue 1", img: "/ligue1.png" },
    { name: "Serie A", img: "/seriea.png" },
    { name: "Bundesliga", img: "/bundesliga.png" },
    { name: "La Liga", img: "/laliga.png" },
    { name: "Premier League", img: "/premier.png" },
  ];
  return (
    <div className="home">
      <div className="hero">
        <div className="heroimg"></div>
        <div className="searchbar">
          <input type="text" placeholder="Search by club name or competition" />
          <div className="searchcircle">
            <FiSearch className="searchicon" />
          </div>
        </div>
      </div>
      <div className="top">
        <div className="competition">
          <div className="img-title">
            <img src="/trophy.png" className="trophy-icon" alt="" />
          </div>
          <h3>Find by Competition</h3>
        </div>
        <div className="top-list-league">
          {league.map((i, idx) => (
            <div key={idx} className="clickable-league">
              <img src={i.img} alt="" />
              <div className="clickable-des">
                <p className="clickable-des-title">{i.name}</p>
                <p className="clickable-des-year">2020/2021</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
