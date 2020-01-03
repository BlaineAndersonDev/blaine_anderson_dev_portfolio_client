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
          <p>A few years ago I began my journey as a freelance developer and since then I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use.</p>
          <p>I'm a confident leader, an attentive team member, a critical thinker, and constantly striving to improve my abilities one project at a time.</p>
        </div>

      </div>
    );
  };
};

export default About;
