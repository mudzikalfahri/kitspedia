import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./detail.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import axios from "axios";

function Detail() {
  // /view/:id
  const { id } = useParams();
  const [data, setData] = useState("");
  const [jersey, setJersey] = useState([]);
  const [selected, setSelected] = useState(0);
  const [clicking, setClicking] = useState(false);
  const [like, setLike] = useState(0);
  const doLike = async () => {
    setClicking(true);
    try {
      await axios.post(
        "https://kitspedia-jersey-api.herokuapp.com/api/jerseys/view/" +
          data._id
      );
      setClicking(false);
      setLike((prev) => prev + 1);
    } catch (err) {
      console.log(err);
      setClicking(false);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://kitspedia-jersey-api.herokuapp.com/api/jerseys/club?name=" +
            id
        );
        const result = await res.json();
        const jersey = result[0];
        setData(result[0]);
        setLike(jersey.views);
        setJersey([jersey.home, jersey.away, jersey.third]);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div className="detailpage">
      {clicking && (
        <div className="clicking-loading">
          <div className="loadingdata">
            <div className="bounce"></div>
            <p>Giving Like to this Jersey...</p>
          </div>
        </div>
      )}
      <header>
        <div className="detail-header">
          <Link to="/">
            <div className="detail-back-button">
              <BsArrowLeftShort color="#262626" size="30" />
            </div>
          </Link>
        </div>
      </header>
      {data ? (
        <div className="detail-main">
          <div className="top-main">
            <div className="selected-container-item">
              {jersey.map((item, idx) => (
                <div
                  onClick={() => setSelected(idx)}
                  key={idx}
                  className="select-item"
                >
                  <img src={item.img} alt="" />
                </div>
              ))}
            </div>
            <div className="image-container-item">
              <img src={jersey.length > 0 ? jersey[selected].img : ""} alt="" />
            </div>
          </div>
          <div className="likes-section">
            <div className="likes">
              <p>Likes</p>
              <p>{like} likes</p>
            </div>
            <div className="material">
              <p>Material</p>
              <p>{data.material}</p>
            </div>
            <div className="season">
              <p>Season</p>
              <p>2020/2021</p>
            </div>
          </div>
          <div className="bottom-main">
            <div className="specs">
              <div className="menu-desc">Club Name</div>
            </div>
            <div className="club-name">
              <img src={data.logo} alt="" />
              <h3>{data.club}</h3>
            </div>
            <div className="desc-jersey">
              <div className="menu-desc">Description</div>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="loadingdata">
          <div className="bounce"></div>
          <p>Loading jersey data..</p>
        </div>
      )}
      <footer className="foot-container">
        <div onClick={doLike} className="footer button">
          <MdFavoriteBorder className="iconlove" size="25" color="white" />
          <div className="">Spam Your Like!</div>
        </div>
      </footer>
    </div>
  );
}

export default Detail;
