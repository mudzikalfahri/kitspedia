import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Competition from "./pages/competition/competition";
import Detail from "./pages/detail/detail";
import Home from "./pages/home/home";
import League from "./pages/league/league";
import Search from "./pages/search/search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jersey/:id" element={<Detail />} />
        <Route path="/league" element={<League />} />
        <Route path="/search" element={<Search />} />
        <Route path="/competition" element={<Competition />} />
      </Routes>
    </div>
  );
}

export default App;
