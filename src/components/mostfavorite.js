import React from "react";
import "./mostfavorite.css";
import Slider from "infinite-react-carousel";

function MostFavorite() {
  return (
    <div className="top-favorite">
      <div className="favorite-title">
        <div className="img-title">
          <img src="/badge.png" className="trophy-icon" alt="" />
        </div>
        <h3>Most Favorite Jersey</h3>
      </div>
      <div className="showcase-top-jersey">
        {/* <div className="img-jersey-favorite"></div> */}
        <Slider
          slidesToShow={window.innerWidth >= 480 ? 2 : 1}
          centerMode={true}
          arrows={false}
          duration={200}
          overScan={2}
          centerPadding={window.innerWidth >= 400 ? "60" : "50"}
          shift={window.innerWidth >= 420 ? 10 : 30}
          className="slider-jersey"
        >
          <div className="club-img-favorite">
            <img src="/jersey.png" alt="" className="jerseyimgimg" />
            <div className="jersey-type">
              <p>Home 2020/2021</p>
            </div>
          </div>
          <div className="club-img-favorite">
            <img src="/jersey2.png" alt="" />
            <div className="jersey-type">
              <p>Away 2020/2021</p>
            </div>
          </div>
          <div className="club-img-favorite">
            <img src="/jersey3.png" alt="" />
            <div className="jersey-type">
              <p>Third 2020/2021</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default MostFavorite;
