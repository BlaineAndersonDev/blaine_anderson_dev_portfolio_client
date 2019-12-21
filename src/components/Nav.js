import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div id="navWrapper">
        <div id="navBoxContainer">

          <div id="navTopBox" className="navBox">
            <img src="/images/BlaineProfile02.jpeg" alt="BlaineAnderson" id="navProfileImage" />
            <p className="navImageText">Blaine Anderson</p>
            <p className="navImageText">Development</p>
          </div>

          <div id="navMidBox" className="navBox">
            <h3 className="navSectionTitle">Demos</h3>
            <p className="navLink">API</p>
            <p className="navLink">Database</p>
          </div>

          <div id="navBotBox" className="navBox">

            <a className="navButton" href="https://www.linkedin.com/in/blaineandersondev/"
            target="_blank"
            rel="noopener noreferrer">
              <img src="/images/iconLinkedin.png" alt="iconLinkedin" className="navSocialIcon" />
              <p className="navSocialText">LinkedIn</p>
            </a>

            <a className="navButton" href="mailto:BlaineAndersonDev@Gmail.com?subject=Let's%20setup%20a%20chat%20about%20a%20project!&amp;body=Name%3A%20%0ACompany%20(If%20applicable)%3A%20%0AType%20of%20project%20(API%2C%20WebApp%2C%20Mobile)%3A%0AAdditional%20Details%3A"
            target="_blank"
            rel="noopener noreferrer">
              <img src="/images/iconMail.png" alt="iconMail" className="navSocialIcon" />
              <p className="navSocialText">Let's Chat</p>
            </a>
            <p className="navSmallText">Copyright © 2019 Blaine Anderson</p>
          </div>

        </div>
      </div>
    );
  };
};

export default Nav;
