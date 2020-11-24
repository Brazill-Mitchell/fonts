import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux"

import Home from './components/Home'
import TestPage from './components/TestPage'

function App(props) {
  return (
    <div className='App'>

      <Router>
        <Switch>
          <Route path='/' exact={true}>
            <Home/>
          </Route>
          <Route path='/test' exact={true}>
            <TestPage/>
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

const mapStateToProps = state => ({
  testValue: state.testValue
})

export default connect(mapStateToProps)(App);
