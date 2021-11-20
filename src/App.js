import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./pages/detail/detail";
import Home from "./pages/home/home";
import Search from "./pages/search/search";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {
  MdOutlineFavoriteBorder,
  MdOutlineAccountCircle,
  MdOutlineExplore,
} from "react-icons/md";
import { CgHome } from "react-icons/cg";
import { IoTrophyOutline } from "react-icons/io5";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header">
          <div className="icon">
            <HiOutlineMenuAlt2 size="25" color="#262626" />
          </div>
          <div className="icon">
            <div className="icon-heart">
              <MdOutlineFavoriteBorder size="25" color="#262626" />
              <div className="dotnotif"></div>
            </div>
          </div>
          {/* <div className="righticon">
            <div className="icon-heart">
              <MdOutlineFavoriteBorder size="25" color="#101010" />
              <div className="dotnotif"></div>
            </div>
          </div> */}
        </div>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jersey/:id" element={<Detail />} />
          <Route path="/jersey/search" element={<Search />} />
        </Routes>
      </main>
      <footer>
        <div className="containernav">
          <NavLink to="/" className="iconwrapper">
            <CgHome className="boticon" />
          </NavLink>
          <NavLink to="/search" className="iconwrapper">
            <MdOutlineExplore className="boticon" />
          </NavLink>
          <NavLink to="/none" className="iconwrapper">
            <IoTrophyOutline className="boticon" />
          </NavLink>
          <NavLink to="/profile" className="iconwrapper">
            <MdOutlineAccountCircle className="boticon" />
          </NavLink>
        </div>
      </footer>
    </div>
  );
}

export default App;
