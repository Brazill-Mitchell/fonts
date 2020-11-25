import React from "react";
import { connect } from "react-redux";
import { screenSizes } from '../responsive.js'
import "./SearchBar.css";

function SearchBar(props) {
  return (
    <div id="search-bar">
      <input
        class="form-control search-input"
        type="text"
        placeholder={props.screenSize === screenSizes.MOBILE || props.screenSize === screenSizes.TABLET
            ? 'Search'
            : 'Search "svg","cut design",etc...'
        }
        aria-label="Search"
      />
    </div>
  );
}

const mapStateToProps = state => ({
    screenSize: state.screenSize
})

export default connect(mapStateToProps)(SearchBar)