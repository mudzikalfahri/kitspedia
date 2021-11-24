import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./searchbar.css";
import { useNavigate } from "react-router";

function SearchBar() {
  const [input, setInput] = useState("");
  let navigate = useNavigate();
  function capitalize(s) {
    if (s.length > 0) {
      return s[0].toUpperCase() + s.slice(1);
    }
    return "";
  }
  const doSearch = (e) => {
    e.preventDefault();
    navigate("/search?q=" + capitalize(input));
  };
  return (
    <div className="hero">
      <div className="heroimg"></div>
      <form onSubmit={doSearch} className="searchbar">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search by club name or competition"
        />
        <button
          type="submit"
          style={{ border: "none" }}
          className="searchcircle"
        >
          <FiSearch className="searchicon" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
