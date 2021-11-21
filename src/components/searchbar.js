import React from "react";
import { FiSearch } from "react-icons/fi";
import "./searchbar.css";

function SearchBar() {
  return (
    <div className="hero">
      <div className="heroimg"></div>
      <div className="searchbar">
        <input type="text" placeholder="Search by club name or competition" />
        <div className="searchcircle">
          <FiSearch className="searchicon" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
