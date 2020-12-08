import React from "react";
import { connect } from "react-redux";
import { setCheckoutCount } from "./redux/actions";
import { screenSizes } from "../responsive.js";
import { Link } from "react-router-dom";
import { shoppingCartYellowImg } from "./resources/tempResources";
import "./CheckoutBar.css";

function Home(props) {
  return (
    <div className="checkout-bar-container container-fluid w-100">
      <Link to="">
        <div className="checkout-bar ">
          <div className="count-and-cart">
            <div className="checkout-bar-item-count">{props.checkoutCount}</div>
            <div className="checkout-bar-image">
              <img className="img" src={shoppingCartYellowImg} alt=""></img>
            </div>
          </div>
          <div className="checkout-bar-title">Checkout</div>
        </div>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  screenSize: state.screenSize,
  checkoutCount: state.checkoutCount,
});

const mapDispatchToProps = { setCheckoutCount };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
