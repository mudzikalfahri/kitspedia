import React from "react";
import "./competitionlist.css";
import LeagueCard from "./leaguecard";

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
          <LeagueCard item={i} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default CompetitionList;
