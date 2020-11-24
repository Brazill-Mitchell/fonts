import React from 'react'
import { connect } from 'react-redux'
import { setCurrentPage } from './redux/actions'
import { Link } from 'react-router-dom'
import "./Menu.css";


function Menu(props) {

    return(
        <div>
            <div className='menu'>
                <div className={
                        props.currentPage === '/home'
                            ? 'menu-item-active'
                            : 'menu-item'
                    }
                    onClick={()=>{props.setCurrentPage('/home')}}
                >
                    <Link to=''>
                        <span>Home</span>
                    </Link>
                </div>
                <div className={
                        props.currentPage === '/sell'
                            ? 'menu-item-active'
                            : 'menu-item'
                    }
                    onClick={()=>{props.setCurrentPage('/sell')}}
                >
                    <Link to=''>
                        <span>Sell</span>
                    </Link>
                </div>
                <div className={
                        props.currentPage === '/shops'
                            ? 'menu-item-active'
                            : 'menu-item'
                    }
                    onClick={()=>{props.setCurrentPage('/shops')}}
                >
                    <Link to=''>
                        <span>Shops</span>
                    </Link>
                </div>
                <div className={
                        props.currentPage === '/settings'
                            ? 'menu-item-active'
                            : 'menu-item'
                    }
                    onClick={()=>{props.setCurrentPage('/settings')}}
                >
                    <Link to=''>
                        <span>Settings</span>
                    </Link>
                </div>
                <div className={
                        props.currentPage === '/login'
                            ? 'menu-item-active'
                            : 'menu-item'
                    }
                    onClick={()=>{props.setCurrentPage('/login')}}
                >
                    <Link to=''>
                        <span>Log in</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentPage: state.currentPage
})

const mapDispatchToProps = { setCurrentPage }


// export default connect(mapStateToProps)(Menu)

export default connect (mapStateToProps,mapDispatchToProps)(Menu)