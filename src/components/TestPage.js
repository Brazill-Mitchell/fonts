import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function TestPage() {

    return(
        <div>
            <Link to='/'>Home</Link>
    
            TestPage
            
        </div>
    )
}

// const mapStateToProps = state => ({
//     testValue: state.testValue
// })


// export default connect(mapStateToProps)(Home)

export default TestPage