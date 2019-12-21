import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div id="projectWrapper">
        <div className="projectBoxContainer">

          <div className="projectTitle">
            My Recent Work
          </div>

          <div className="projectBox">
            <img src="/images/SenyoursIcon.jpg" alt="Senyours" className="projectImage" />
            <div className="projectOverlay">
              <p className="projectName">SenYours</p>
              <p className="projectText">Senyours is a web platform that connects verified companions with senior adults that need companionship care, help shopping, transportation and more.</p>
              <a className="projectButton" href="https://www.senyours.io/" target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </div>
          </div>
          <div className="projectBox">
            <img src="/images/RTDIcon.png" alt="RateTheDate" className="projectImage" />
            <div className="projectOverlay">
              <p className="projectName">GrateDate</p>
              <p className="projectText">GrateDate is an iOS app that helps its users make the best choices in thier dating life based on their data and input from previous dating experiences.</p>
              <a className="projectButton" href="https://ratethedate.app/" target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </div>
          </div>

        </div>
      </div>
    );
  };
};

export default Projects;
