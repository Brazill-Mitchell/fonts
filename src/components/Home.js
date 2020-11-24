import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { productList } from "./resources/tempResources";
import "./Home.css";
import Nav from "./Nav";
import Menu from "./Menu";
import { birthdayImg,culogoImg,expandImg,fontSizeImg,treeImg } from "./resources/tempResources";


function Home() {
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
            Featured Sections
            <div className="section-select d-flex flex-row">
                <Link to=''>
                    <div className='section-option'>
                        <img className='section-img' src={fontSizeImg} alt=''></img>
                        <div className='section-title'>Fonts</div>
                    </div>
                </Link>
                <Link to=''>
                    <div className='section-option'>
                        <img className='section-img' src={expandImg} alt=''></img>
                        <div className='section-title'>SVG Designs</div>
                    </div>
                </Link>
                <Link to=''>
                    <div className='section-option'>
                        <img className='section-img' src={treeImg} alt=''></img>
                        <div className='section-title'>Holiday</div>
                    </div>
                </Link>
                <Link to=''>
                    <div className='section-option'>
                        <img className='section-img' src={birthdayImg} alt=''></img>
                        <div className='section-title'>Birthday</div>
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

// const mapStateToProps = state => ({
//     testValue: state.testValue
// })

// export default connect(mapStateToProps)(Home)

export default Home;
