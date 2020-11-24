import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import "./Menu.css";


function Menu() {

    return(
        <div>
            <div className='menu'>
                <div className='menu-item'>
                    <Link to=''>
                        <span>Home</span>
                    </Link>
                </div>
                <div className='menu-item'>
                    <Link to=''>
                        <span>Sell</span>
                    </Link>
                </div>
                <div className='menu-item'>
                    <Link to=''>
                        <span>Shops</span>
                    </Link>
                </div>
                <div className='menu-item'>
                    <Link to=''>
                        <span>Settings</span>
                    </Link>
                </div>
                <div className='menu-item'>
                    <Link to=''>
                        <span>Log in</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

// const mapStateToProps = state => ({
//     testValue: state.testValue
// })


// export default connect(mapStateToProps)(Menu)

export default Menu