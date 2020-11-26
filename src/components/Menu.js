import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentPage } from "./redux/actions";
import { Link } from "react-router-dom";
import { screenSizes } from "../responsive.js";
import "./Menu.css";
import Fade from "react-bootstrap/Fade";
import hotDogMenu from "./resources/hotDogMenu.png";

function Menu(props) {
  const [isMenuShown, toggleMenu] = useState("false");

  function handleMenu() {
    if (props.screenSize !== screenSizes.MOBILE) {
      if (isMenuShown === false) {
        toggleMenu(true);
      }
    }else{
      toggleMenu(false)
    }
  }

  useEffect(() => {
    handleMenu();
  }, [props.screenSize]);

  return (
    <div className='menu-container sticky-top'
    style={
        props.screenSize !== screenSizes.MOBILE
          ? {top:`${props.navHeight}px`,position:'sticky'}
          : {top:`${props.navHeight / 2}px`,position:'absolute'}
    }
    >
      <div
      className={
        props.screenSize === screenSizes.MOBILE
          ? isMenuShown
            ? "menu bg-white"
            : "menu"
          : " container menu"
      }
      style={{
        top:
          props.screenSize !== screenSizes.MOBILE
            ? `${props.navHeight}px`
            : `${props.navHeight}px`,
        position: `${
          props.screenSize !== screenSizes.MOBILE ? "sticky" : "fixed"
        }`,
      }}
    >
      {props.screenSize === screenSizes.MOBILE ? (
        <div
          className={
            isMenuShown ? "menu-icon icon-menu-in" : "menu-icon icon-menu-out"
          }
          onClick={() => {
            toggleMenu(!isMenuShown);
          }}
        >
          <img className="menu-icon-img" src={hotDogMenu} alt=""></img>
        </div>
      ) : (
        []
      )}
      <Fade in={isMenuShown}>
        <div className="menu-content">
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
      </Fade>
    </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
  navHeight: state.navHeight,
  screenSize: state.screenSize,
});

const mapDispatchToProps = { setCurrentPage };

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
