import React from "react";
import CompetitionList from "../../components/competitionlist";
import Layout from "../../components/layout";
import "./competition.css";

function Competition() {
  return (
    <Layout>
      <div className="competition-page">
        <CompetitionList />
      </div>
    </Layout>
  );
}

export default Competition;
