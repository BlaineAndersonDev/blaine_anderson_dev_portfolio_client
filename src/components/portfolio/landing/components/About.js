import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div id="aboutWrapper">

        <div id="aboutTopBox" className="aboutBox">
          <p>Hi, I’m Blaine. Nice to meet you.</p>
        </div>

        <div id="aboutBotBox" className="aboutBox">
          <p>Since beginning my journey as a freelance developer a few years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time. </p>
        </div>

      </div>
    );
  };
};

export default About;
