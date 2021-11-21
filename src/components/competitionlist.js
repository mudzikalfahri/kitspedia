import React from "react";
import "./competitionlist.css";

function CompetitionList() {
  const league = [
    {
      name: "Premier League",
      slug: "Premier League",
      country: "England",
      img: "/premier.png",
    },
    {
      name: "Ligue1 Uber Eats",
      slug: "Ligue 1",
      country: "France",
      img: "/ligue1.png",
    },
    {
      name: "Serie A TIM",
      slug: "Serie A",
      country: "Italy",
      img: "/seriea.png",
    },
    {
      name: "Bundes Liga",
      slug: "Bundesliga",
      country: "Germany",
      img: "/bundesliga.png",
    },
    {
      name: "La Liga BBVA",
      slug: "La Liga",
      country: "Spain",
      img: "/laliga.png",
    },
    {
      name: "Premier League",
      slug: "Premier League",
      country: "England",
      img: "/premier.png",
    },
  ];
  return (
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
              <div className="country">{i.country}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompetitionList;
