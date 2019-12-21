import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  render() {
    return (
      <div id="titleWrapper">

        <div id="titleTopBox" className="titleBox">
          <p> Blaine Anderson </p>
        </div>

        <div id="titleMidBox" className="titleBox">
          <p> I create beautiful & meaningful things, and I love what I do. </p>
        </div>

      </div>
    );
  };
};

export default Title;
