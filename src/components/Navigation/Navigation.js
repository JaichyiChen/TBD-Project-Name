import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import NavLinks from "./NavLinks";
import SideBar from "./SideBar";
import Backdrop from "../UIElements/Backdrop";
import "./Navigation.css";
const Navigation = (props) => {
  const [sideBar, setsideBar] = useState(false);
  const manageSideBar = () => {
    return setsideBar((prev) => !prev);
  };
  return (
    <>
      {sideBar && <Backdrop onClick={manageSideBar}></Backdrop>}
      <SideBar show={sideBar} onClick={manageSideBar}>
        <nav className="main-navigation__bar-nav">
          <NavLinks></NavLinks>
        </nav>
      </SideBar>
      <Header>
        <button className="main-navigation__menu-btn" onClick={manageSideBar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Home</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks></NavLinks>
        </nav>
      </Header>
    </>
  );
};

export default Navigation;
