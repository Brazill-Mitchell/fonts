import React from "react";
import { connect } from "react-redux";
import { screenSizes } from "../responsive.js";
import { setCurrentSection } from "./redux/actions";
import { Link } from "react-router-dom";
import { productList } from "./resources/tempResources";
import "./Home.css";
import Nav from "./Nav";
import Menu from "./Menu";
import {
  birthdayImg,
  expandImg,
  fontSizeImg,
  treeImg,
} from "./resources/tempResources";

function Home(props) {
  return (
    <div>
      <Nav />

      {/* body */}
      <div className="d-flex flex-row container-fluid w-100">
        <Menu />
        {/* products area */}
        <div className="products-area d-flex flex-column">
          {/* featured sections */}
          <div
            className="featured-sections-container"
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
                style={{ pointerEvents: "none" }}
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
                      <img
                        className="section-img"
                        src={fontSizeImg}
                        alt=""
                      ></img>
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
                      <img className="section-img" src={expandImg} alt=""></img>
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
                      <img className="section-img" src={treeImg} alt=""></img>
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
                      <img
                        className="section-img"
                        src={birthdayImg}
                        alt=""
                      ></img>
                      <div className="section-title">Birthday</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* products */}
          <div className="products-list mt-4">
            {productList.map((product, index) => {
              return (
                <div className="product mb-3" key={index}>
                  <div className="product-image">
                    <img
                      className="img rounded"
                      src={product.image}
                      alt=""
                    ></img>
                  </div>
                  <div className="product-title">{product.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
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
