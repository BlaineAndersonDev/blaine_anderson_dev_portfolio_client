import React, { Component } from 'react';
import axios from 'axios';
import './ChampionList.css';

class ChampionList extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div id="champListWrapper" className="champBox">
        <div id="champListTitle">
          <h3>Champions</h3>
        </div>
        <div id="champListList">
            { this.props.champions.map((champion, index) =>
              <div className="champListBox" key={champion.champion_id}>
                <p>Name: {champion.name}</p>
                <p>Class: {champion.class}</p>
                <p>Gold: {champion.gold}</p>
                <img src={champion.image} alt={champion.name} />
              </div>
            )}
        </div>
      </div>
    );
  };
};

export default ChampionList;