import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../components/layout";
import "./search.css";

function Search() {
  const loc = useLocation();
  console.log(loc);
  return <Layout></Layout>;
}

export default Search;
