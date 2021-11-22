import React from "react";
import "./home.css";
import CompetitionList from "../../components/competitionlist";
import MostFavorite from "../../components/mostfavorite";
import SearchBar from "../../components/searchbar";
import Layout from "../../components/layout";

function Home() {
  return (
    <Layout>
      <div className="home">
        <SearchBar />
        <MostFavorite />
        <CompetitionList />
      </div>
    </Layout>
  );
}

export default Home;
