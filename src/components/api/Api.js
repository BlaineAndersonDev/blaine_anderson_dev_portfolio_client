import React, { Component } from 'react';
import './Api.css';
import ApiTitle from './ApiTitle.js';
import ApiList from './ApiList.js';
import ApiCreate from './ApiCreate.js';

class Api extends Component {

  render() {
    return (
      <div id="apiWrapper">

        <div id="apiTopBox" className="apiHorizontalBox">
          <ApiTitle />
        </div>

        <div id="apiMidBox" className="apiHorizontalBox">

          <div id="apiMidLeftBox" className="apiVerticalBox">
            <ApiList />
          </div>

          <div id="apiMidRightBox" className="apiVerticalBox">
            <div id="apiMidRightTopBox" className="apiMidHorizontalBox">
              <ApiCreate />
            </div>
            <div id="apiMidRightMidBox" className="apiMidHorizontalBox">
              Edit / Delete
            </div>
            <div id="apiMidRightBotBox" className="apiMidHorizontalBox">
              Reset
            </div>
          </div>

        </div>

      </div>
    );
  };
};

export default Api;
