import React, { Component } from 'react';
import './Landing.css';
import Title from './components/Title.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import About from './components/About.js';
import CallToAction from './components/CallToAction.js';

class Landing extends Component {
  render() {
    return (
      <div id="landingWrapper">

        <div id="landingTopBox" className="landingBox">
          <Title />
        </div>

        <div className="landingBox">
          <About />
        </div>
        <div className="landingBox">
          <Skills />
        </div>
        <div className="landingBox">
          <Projects />
        </div>
        <div className="landingBox">
          <CallToAction />
        </div>

      </div>
    );
  };
};

export default Landing;
