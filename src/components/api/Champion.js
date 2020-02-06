import React, { Component } from 'react';
import axios from 'axios';
import './Champion.css';
import ChampionList from './ChampionList.js';

class Champion extends Component {
  state = {
    champions: []
  }

  componentDidMount() {
  }

  render() {
    return (
      <div id="champWrapper">
        <ChampionList />
      </div>
    );
  };
};

export default Champion;
