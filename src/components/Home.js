import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {

    return(
        <div>
            <Link to='/test'>Test</Link>
            Home
        </div>
    )
}

// const mapStateToProps = state => ({
//     testValue: state.testValue
// })


// export default connect(mapStateToProps)(Home)

export default Home