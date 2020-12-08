import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { screenSizes } from "../responsive.js";
import { setCurrentSection } from "./redux/actions";
import { Link } from "react-router-dom";
import { productList } from "./resources/tempResources";
import "./Home.css";
import Nav from "./Nav";
import Menu from "./Menu";
import SearchBar from "./SearchBar.js";
import CheckoutBar from "./CheckoutBar.js";
import {
  birthdayImg,
  expandImg,
  fontSizeImg,
  treeImg,
} from "./resources/tempResources";

function Home(props) {
  const [isScrolling, _setIsScrolling] = useState(false);

  // Scroll Shadow Animation
  const refIsScrolling = useRef(isScrolling);
  const setIsScrolling = (value) => {
    refIsScrolling.current = value;
    _setIsScrolling(value);
  };

  const timerRef = useRef(null);

  document.addEventListener(
    "scroll",
    function (e) {
      // last_known_scroll_position = window.scrollY;

      if (!refIsScrolling.current) {
        // console.log("initial scroll");
        try{
          if (refMenuAndSearch.current.getBoundingClientRect().y === 0){
            setIsScrolling(true)
          }
        }
        catch(e){
          // console.log(e)
        }
      } else {
        if (timerRef.current !== null) {
          clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 300);
      }
    },
    false
  );

  // scroll effect only when search is at top
  const refMenuAndSearch = useRef(null)
  function test(){
    console.log(refMenuAndSearch.current.getBoundingClientRect().y)
  }

  return (
    <div>
      <Nav />
      {/* Mobile Menu & SearchBar */}
      {props.screenSize === screenSizes.MOBILE ? (
        <div ref={refMenuAndSearch} className="menu-and-search-container">
          <div
            className={
              isScrolling
                ? "menu-and-searchbar-scrolling"
                : "menu-and-searchbar"
            }
          >
            <div
              className={
                isScrolling ? "menu-mobile-scrolling ml-4" : "menu-mobile ml-4"
              }
            >
              <Menu />
            </div>
            <div onClick={test} className="searchbar-mobile">
              <SearchBar />
            </div>
          </div>
        </div>
      ) : (
        []
      )}
      {/* body */}
      <div className="d-flex flex-row container-fluid w-100">
        {props.screenSize !== screenSizes.MOBILE ? <Menu /> : []}
        {/* products area */}
        <div className="products-area d-flex flex-column">
          {/* featured sections */}
          {props.screenSize !== screenSizes.MOBILE ? (
            <div
              className={
                props.screenSize !== screenSizes.MOBILE
                  ? isScrolling
                    ? "featured-sections-container pb-2 featured-sections-scrolling"
                    : "featured-sections-container pb-2"
                  : isScrolling
                  ? "featured-sections-container featured-sections-scrolling"
                  : "featured-sections-container"
              }
              style={
                props.screenSize !== screenSizes.MOBILE
                  ? { top: `${props.navHeight}px` }
                  : { top: "0" }
              }
            >
              <div className="featured-sections">
                <small
                  id="title-featured"
                  className="text-muted font-weight-bold"
                  style={{
                    pointerEvents: "none",
                    marginLeft: "50px",
                  }}
                >
                  Featured Sections
                </small>
                <div className="container-fluid section-select mt-2">
                  <div
                    className={
                      props.currentSection === "fonts"
                        ? "section-option-active"
                        : "section-option"
                    }
                    onClick={() => {
                      props.setCurrentSection("fonts");
                    }}
                  >
                    <Link to="">
                      <div className="d-flex flex-row">
                        <img className="section-img" src={fontSizeImg} alt="" />
                        <div className="section-title">Fonts</div>
                      </div>
                    </Link>
                  </div>
                  <div
                    className={
                      props.currentSection === "svg"
                        ? "section-option-active"
                        : "section-option"
                    }
                    onClick={() => {
                      props.setCurrentSection("svg");
                    }}
                  >
                    <Link to="">
                      <div className="d-flex flex-row">
                        <img className="section-img" src={expandImg} alt="" />
                        <div className="section-title">SVG Designs</div>
                      </div>
                    </Link>
                  </div>
                  <div
                    className={
                      props.currentSection === "holiday"
                        ? "section-option-active"
                        : "section-option"
                    }
                    onClick={() => {
                      props.setCurrentSection("holiday");
                    }}
                  >
                    <Link to="">
                      <div className="d-flex flex-row">
                        <img className="section-img" src={treeImg} alt="" />
                        <div className="section-title">Holiday</div>
                      </div>
                    </Link>
                  </div>
                  <div
                    className={
                      props.currentSection === "birthday"
                        ? "section-option-active"
                        : "section-option"
                    }
                    onClick={() => {
                      props.setCurrentSection("birthday");
                    }}
                  >
                    <Link to="">
                      <div className="d-flex flex-row">
                        <img className="section-img" src={birthdayImg} alt="" />
                        <div className="section-title">Birthday</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            []
          )}

          {/* products */}
          <div className="products-list mt-4">
            {productList.map((product, index) => {
              return (
                <div className="product mb-3" key={index}>
                  <div className="product-image">
                    <img className="img rounded" src={product.image} alt="" />
                  </div>
                  <div className="product-title">{product.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {props.screenSize === screenSizes.MOBILE ? <CheckoutBar /> : []}
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentSection: state.currentSection,
  navHeight: state.navHeight,
  screenSize: state.screenSize,
});

const mapDispatchToProps = { setCurrentSection };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
