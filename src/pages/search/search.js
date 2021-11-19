import React from "react";
import { useLocation } from "react-router-dom";

function Search() {
  const loc = useLocation();
  console.log(loc);
  return <div></div>;
}

export default Search;
