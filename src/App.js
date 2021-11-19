import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./pages/detail/detail";
import Home from "./pages/home/home";
import Search from "./pages/search/search";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header">
          <div className="icon">
            <HiOutlineMenuAlt2 size="25" color="#101010" />
          </div>
          <div className="righticon">
            <div className="icon-heart">
              <MdOutlineFavoriteBorder size="20" color="white" />
              <div className="dotnotif"></div>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jersey/:id" element={<Detail />} />
          <Route path="/jersey/search" element={<Search />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
