import React from "react";
import "./home.css";
import CompetitionList from "../../components/competitionlist";
import MostFavorite from "../../components/mostfavorite";
import SearchBar from "../../components/searchbar";

function Home() {
  return (
    <div className="home">
      <SearchBar />
      <MostFavorite />
      <CompetitionList />
    </div>
  );
}

export default Home;
