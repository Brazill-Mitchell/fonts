import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { setNavHeight } from "./redux/actions";
import { Link } from "react-router-dom";
import { screenSizes } from "../responsive.js";
import "./Nav.css";
import SearchBar from "./SearchBar.js";
import Menu from "./Menu.js";
import { culogoImg, shoppingCartImg } from "./resources/tempResources";

function Nav(props) {
  const refNav = useRef(null);

  function updateNavHeight() {
    if (refNav.current.clientHeight !== props.navHeight) {
      props.setNavHeight(refNav.current.clientHeight);
    }
  }

  // set nav height on initial render, and each time the screen is resized
  useEffect(() => {
    props.setNavHeight(refNav.current.clientHeight);
  }, []);
  useEffect(() => {
    updateNavHeight();
  }, [props.screenSize]);

  return (
    <div
      className={
        props.screenSize !== screenSizes.MOBILE
          ? "sticky-top bg-white"
          : "bg-white"
      }
      ref={refNav}
    >
      {props.screenSize !== screenSizes.MOBILE ? (
        //Tablet & ^
        <div className="container-fluid navbar w-100">
          <div className="guest-name">Guest</div>
          <SearchBar />
          <Link to="">
            <span>Register</span>
          </Link>
          <Link to="">
            <img className="cart-img" src={shoppingCartImg} alt=""></img>
          </Link>
          <Link to="">
            <div className="logo-home">
              <img className="img" src={culogoImg} alt=""></img>
            </div>
          </Link>
        </div>
      ) : (

        //Mobile
        <div className="container-fluid navbar w-100">
          <div className="guest-name-mobile">Guest</div>
          <Link to="">
            <div className="logo-home-mobile">
              <img className="img" src={culogoImg} alt=""></img>
            </div>
          </Link>


          <div className='position-absolute'>
          {/* <div className='sticky-top'><SearchBar /></div> */}
          </div>

          {/* Cart */}
          {/* <Link to="">
              <img className="cart-img" src={shoppingCartImg} alt=""></img>
            </Link> */}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  screenSize: state.screenSize,
  navHeight: state.navHeight,
});

const mapDispatchToProps = { setNavHeight };

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
