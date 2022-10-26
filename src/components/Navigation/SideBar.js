import React from "react";
import "./SideBar.css";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
// render the sidebar in a separate div instead of root
//when in is set to true, enter class is applied and sidebar is visible meaning
// it's mounted and vice versa
const SideBar = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-bar" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("side-bar-hook")
  );
};

export default SideBar;
