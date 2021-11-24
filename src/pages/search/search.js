import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import "./search.css";
import SearchBar from "../../components/searchbar";
import ClubCardByLeague from "../../components/clubcardbyleague";
import { useLocation } from "react-router";

function Search() {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const [loading, setLoading] = useState(true);

  console.log(data);
  useEffect(() => {
    setData([]);
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(
          "https://kitspedia-jersey-api.herokuapp.com/api/jerseys/search" +
            search
        );
        const result = await res.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchData();
  }, [search]);
  return (
    <Layout>
      <div className="search-page">
        <SearchBar />
        {loading && (
          <div className="loadingdatasearch">
            <div className="bouncetopten"></div>
            <p>Loading jersey data..</p>
          </div>
        )}
        <div className="search-page-main">
          {data.length > 0 &&
            data.map((item, idx) => <ClubCardByLeague key={idx} item={item} />)}
        </div>
      </div>
    </Layout>
  );
}

export default Search;
