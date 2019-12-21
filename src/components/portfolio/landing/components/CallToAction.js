import React, { Component } from 'react';
import './CallToAction.css';

class CallToAction extends Component {
  render() {
    return (
      <div id="callWrapper">
        <div id="callBoxContainer">

          <div id="callFirstBox" className="callBox">
            <p> Start a project </p>
          </div>

          <div id="callSecondBox" className="callBox">
            <p> Interested in working together? We should setup a chat. I'll buy the coffee. </p>
          </div>

          <div id="callThirdBox" className="callBox">
            <a className="callButton"
              href="mailto:BlaineAndersonDev@Gmail.com?subject=Let's%20setup%20a%20chat%20about%20a%20project!&amp;body=Name%3A%20%0ACompany%20(If%20applicable)%3A%20%0AType%20of%20project%20(API%2C%20WebApp%2C%20Mobile)%3A%0AAdditional%20Details%3A"
              target="_blank"
              rel="noopener noreferrer">
              Let's do this
            </a>
          </div>
        </div>
      </div>
    );
  };
};

export default CallToAction;
