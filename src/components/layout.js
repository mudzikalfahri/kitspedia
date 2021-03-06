import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {
  MdOutlineFavoriteBorder,
  MdOutlineAccountCircle,
  MdOutlineExplore,
} from "react-icons/md";
import { CgHome } from "react-icons/cg";
import { IoTrophyOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Layout({ children }) {
  return (
    <div>
      <header className="layout-header">
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
        </div>
      </header>
      <div className="main">{children}</div>
      <footer>
        <div className="containernav">
          <NavLink to="/" className="iconwrapper">
            <CgHome className="boticon" />
          </NavLink>
          <NavLink to="/search?q=" className="iconwrapper">
            <MdOutlineExplore className="boticon" />
          </NavLink>
          <NavLink to="/top10kits" className="iconwrapper">
            <IoTrophyOutline className="boticon" />
          </NavLink>
          <NavLink to="/about" className="iconwrapper">
            <MdOutlineAccountCircle className="boticon" />
          </NavLink>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
