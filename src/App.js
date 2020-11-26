import './App.css';
import { useEffect } from 'react'
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux"
import { checkScreenSize } from './responsive.js'
import { setScreenSize } from './components/redux/actions.js'

import Home from './components/Home'
import TestPage from './components/TestPage'

function App(props) {

  function setScreenSize(){
    const screen = checkScreenSize();
    if (screen !== props.screenSize) {
        props.setScreenSize(screen);
    }
  };

  useEffect(()=>{
    window.addEventListener('resize',setScreenSize)
  },[props.screenSize])
  
  useEffect(()=>{
    setScreenSize()
  },[])

  return (
    <div id='App'>
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
  screenSize: state.screenSize,
  navHeight: state.navHeight
})

const mapDispatchToProps = { setScreenSize }

export default connect(mapStateToProps,mapDispatchToProps)(App);
