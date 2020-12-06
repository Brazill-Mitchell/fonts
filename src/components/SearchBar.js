import React from "react";
import { connect } from "react-redux";
import { screenSizes } from "../responsive.js";
import "./SearchBar.css";
import searchIcon from "./resources/searchIcon.png";

function SearchBar(props) {
  function handleClick() {}

  return (
    <div
      id="search-container"
      className={props.screenSize !== screenSizes.MOBILE ? "mt-2" : ""}
      style={
        props.screenSize !== screenSizes.MOBILE
          ? { flex: "0 0 40%" }
          : { flex: "0 0 80%", margin: "0 auto" }
      }
    >
      <img className="search-icon" src={searchIcon} alt=""></img>
      <input
        class=" search-input"
        type="text"
        placeholder={
          props.screenSize === screenSizes.MOBILE ||
          props.screenSize === screenSizes.TABLET
            ? "   Search"
            : '   Search "svg","cut design",etc...'
        }
        onClick={handleClick}
        aria-label="Search"
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  screenSize: state.screenSize,
});

export default connect(mapStateToProps)(SearchBar);
