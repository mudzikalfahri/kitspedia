import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import TopTenCard from "../../components/toptencard";
import "./topten.css";

function TopTen() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://kitspedia-jersey-api.herokuapp.com/api/jerseys/favorite"
        );
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);
  return (
    <Layout>
      <div className="topten-main">
        <div className="title-topten">
          <img src="/trophy.png" alt="" />
          <h4>Top 10 Kits around The World</h4>
          <p>Here are top 10 club's jersey by likes count</p>
        </div>
        <div className="list-topten">
          {data.length ? (
            data
              .filter((i, idx) => idx < 10)
              .map((per, idx) => (
                <TopTenCard item={per} key={idx} rank={idx + 1} />
              ))
          ) : (
            <div className="loadingtopten">
              <div className="bouncetopten"></div>
              <p>Loading jersey data..</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default TopTen;
