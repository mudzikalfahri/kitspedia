import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ClubCardByLeague from "../../components/clubcardbyleague";
import Layout from "../../components/layout";
import SkeletonCardleague from "../../components/skeleton/skeletoncardleague";
import "./league.css";
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
function League() {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const name = search.split("?name=")[1].split("%20").join(" ");
  const dataleague = league.filter((per, idx) => per.slug === name)[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://kitspedia-jersey-api.herokuapp.com/api/jerseys/league" +
            search
        );
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [search]);
  return (
    <Layout>
      <div className="league-page">
        <div className="league-banner">
          <img src={dataleague.img} alt="" />
          <p className="title-league">{dataleague.name}</p>
          <p className="season-league">Season 2020/2021</p>
        </div>
        <div className="list-container">
          {data.length ? (
            data.map((item, idx) => <ClubCardByLeague key={idx} item={item} />)
          ) : (
            <SkeletonCardleague />
          )}
        </div>
      </div>
    </Layout>
  );
}
export default League;
