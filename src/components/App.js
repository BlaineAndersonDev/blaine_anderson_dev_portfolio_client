import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Nav from './Nav.js';
import Landing from './portfolio/landing/Landing.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="appWrapper">
          <div id="appLeftBox">
            <div id="navContainer">
              <Nav />
            </div>
          </div>

          <div id="appRightBox">
            <div id="bodyContainer">
              <Route exact path='/' component={Landing}/>
            </div>
          </div>

        </div>
      </Router>
    );
  };
};

export default App;
