import React from "react";
import { connect } from "react-redux";
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
  treeImg
} from "./resources/tempResources";

function Home(props) {
  return (
    <div>
      <Nav />

      {/* body */}
      <div className="d-flex flex-row">
        <Menu />
        {/* products area */}
        <div className="products-area d-flex flex-column">
          {/* featured sections */}
          <div className="featured-sections">
            <small className='text-muted font-weight-bold ml-3'>Featured Sections</small>
            <div className="section-select d-flex flex-row mt-2">
              <Link to="">
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
                  <img className="section-img" src={fontSizeImg} alt=""></img>
                  <div className="section-title">Fonts</div>
                </div>
              </Link>
              <Link to="">
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
                  <img className="section-img" src={expandImg} alt=""></img>
                  <div className="section-title">SVG Designs</div>
                </div>
              </Link>
              <Link to="">
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
                  <img className="section-img" src={treeImg} alt=""></img>
                  <div className="section-title">Holiday</div>
                </div>
              </Link>
              <Link to="">
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
                  <img className="section-img" src={birthdayImg} alt=""></img>
                  <div className="section-title">Birthday</div>
                </div>
              </Link>
            </div>
          </div>

          {/* products */}
          <div className="products-list mt-4">
            {productList.map((product, index) => {
              return (
                <div className="product" key={index}>
                  <div className="product-image">
                    <img className="img" src={product.image} alt=""></img>
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
});

const mapDispatchToProps = { setCurrentSection };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
