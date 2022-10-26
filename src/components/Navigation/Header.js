import React from "react";
import "./Header.css";
import NavLinks from "./NavLinks";

const Header = (props) => {
  return <header className="main-header">{props.children}</header>;
};

export default Header;
