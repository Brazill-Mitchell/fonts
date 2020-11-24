import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Nav.css'
import SearchBar from './SearchBar.js'
import { culogoImg, shoppingCartImg } from './resources/tempResources'

function Nav() {

    return(
        <div>
            {/* <Link to='/test'>Test</Link> */}
            <div className='navbar'>
                <div className='guest-name'>
                    Guest
                </div>
                <SearchBar/>
                <Link to=''>
                    <span>Register</span>
                </Link>
                <Link to=''>
                    <img className='cart-img' src={shoppingCartImg} alt=''></img>
                </Link>
                <Link to=''>
                    <div className="logo-home">
                        <img className='img' src={culogoImg} alt=''></img>
                    </div>
                </Link>

            </div>
        </div>
    )
}

// const mapStateToProps = state => ({
//     testValue: state.testValue
// })


// export default connect(mapStateToProps)(Nav)

export default Nav