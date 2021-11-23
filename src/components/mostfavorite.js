import React from "react";
import "./mostfavorite.css";
import Slider from "infinite-react-carousel";
import { useState, useEffect } from "react";
import FavoriteCard from "./favoritecard";
import SkeletonFavoriteClub from "./skeleton/skeletonfavoriteclub";
import { Link } from "react-router-dom";

function MostFavorite() {
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
    <div className="top-favorite">
      <div className="favorite-title">
        <div className="leftfavtitle">
          <div className="img-title">
            <img src="/badge.png" className="trophy-icon" alt="" />
          </div>
          <h3>Most Favorite Jersey</h3>
        </div>
        <Link to="/top10kits">
          <div className="show-all">Show All</div>
        </Link>
      </div>
      <div className="showcase-top-jersey">
        {data.length ? (
          <Slider
            slidesToShow={window.innerWidth >= 480 ? 2 : 1}
            centerMode={true}
            arrows={false}
            duration={200}
            overScan={2}
            centerPadding={
              window.innerWidth >= 544
                ? "50"
                : window.innerWidth >= 400
                ? "70"
                : window.innerWidth >= 330
                ? "50"
                : "30"
            }
            shift={window.innerWidth >= 420 ? 0 : 30}
            className="slider-jersey"
          >
            {data
              .filter((i, dx) => dx < 5)
              .map((item, idx) => (
                <FavoriteCard
                  key={idx}
                  club={item.club}
                  logo={item.logo}
                  img={item.home.img}
                />
              ))}
          </Slider>
        ) : (
          <SkeletonFavoriteClub />
        )}
      </div>
    </div>
  );
}

export default MostFavorite;
