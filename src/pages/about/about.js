import React from "react";
import Layout from "../../components/layout";
import "./about.css";

function About() {
  return (
    <Layout>
      <div className="about-page">
        <img src="/logo.png" alt="" />
        <h4>Kitspedia App</h4>
        <p>
          This application is useful for displaying a collection of european
          club jerseys from east side to west side
        </p>
        <a
          href="https://github.com/mudzikalfahri/kitspedia"
          rel="noreferrer"
          target="_blank"
        >
          <div className="github-button">
            <img src="https://i.ibb.co/QpPnCD8/icons8-github-96.png" alt="" />
            <p>Github</p>
          </div>
        </a>
      </div>
    </Layout>
  );
}

export default About;
