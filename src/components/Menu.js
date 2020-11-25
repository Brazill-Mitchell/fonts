import React, { useState } from "react";
import { connect } from "react-redux";
import { setCurrentPage } from "./redux/actions";
import { Link } from "react-router-dom";
import "./Menu.css";
import Collapse from "react-bootstrap/Collapse";
import hotDogMenu from "./resources/hotDogMenu.png";

function Menu(props) {
  const [isMenuShown, handleMenu] = useState("false");

  return (
    <div>
      <div
          className="menu-icon"
          onClick={() => {
            handleMenu(!isMenuShown);
          }}
        >
          <img className="img" src={hotDogMenu} alt=""></img>
        </div>
      <Collapse in={isMenuShown}>
        <div className="menu" style={{ top: `${props.navHeight}px` }}>
          <div
            className={
              props.currentPage === "/home" ? "menu-item-active" : "menu-item"
            }
            onClick={() => {
              props.setCurrentPage("/home");
            }}
          >
            <Link to="">
              <span>Home</span>
            </Link>
          </div>
          <div
            className={
              props.currentPage === "/sell" ? "menu-item-active" : "menu-item"
            }
            onClick={() => {
              props.setCurrentPage("/sell");
            }}
          >
            <Link to="">
              <span>Sell</span>
            </Link>
          </div>
          <div
            className={
              props.currentPage === "/shops" ? "menu-item-active" : "menu-item"
            }
            onClick={() => {
              props.setCurrentPage("/shops");
            }}
          >
            <Link to="">
              <span>Shops</span>
            </Link>
          </div>
          <div
            className={
              props.currentPage === "/settings"
                ? "menu-item-active"
                : "menu-item"
            }
            onClick={() => {
              props.setCurrentPage("/settings");
            }}
          >
            <Link to="">
              <span>Settings</span>
            </Link>
          </div>
          <div
            className={
              props.currentPage === "/login" ? "menu-item-active" : "menu-item"
            }
            onClick={() => {
              props.setCurrentPage("/login");
            }}
          >
            <Link to="">
              <span>Log in</span>
            </Link>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
  navHeight: state.navHeight,
});

const mapDispatchToProps = { setCurrentPage };

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
