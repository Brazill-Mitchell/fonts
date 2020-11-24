import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './SearchBar.css'

function SearchBar() {

    return(
        <div id='search-bar'>
            <input class='form-control search-input' type='text' placeholder={`Search "svg","cut design",etc...`} aria-label='Search'/>
        </div>
    )
}

// const mapStateToProps = state => ({
//     testValue: state.testValue
// })


// export default connect(mapStateToProps)(SearchBar)

export default SearchBar