import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./detail.css";
import { BsArrowLeftShort } from "react-icons/bs";

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "http://localhost:8000/api/jerseys/club?name=" + id
      );
      const result = await res.json();
      setData(result);
    };
    fetchData();
  }, [id]);
  return (
    <div className="detailpage">
      <header>
        <div className="detail-header">
          <div className="detail-back-button">
            <BsArrowLeftShort color="#262626" size="30" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Detail;
