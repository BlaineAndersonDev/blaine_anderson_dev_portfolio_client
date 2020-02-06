import React, { Component } from 'react';
import axios from 'axios';
import './ChampionList.css';

class ChampionList extends Component {
  state = {
    champions: []
  }

  componentDidMount() {
    axios.get(`http://159.65.105.25:5001/api/champions`)
      .then(res => {
        console.log()
        const champions = res.data.results;
        this.setState({ champions });
      })
  }

  render() {
    return (
      <div id="champListWrapper">
            { this.state.champions.map((champion, index) =>
              <div key={champion.champion_id} className="champListBox">
                <li>{champion.name}</li>
                <li>{champion.class}</li>
                <li>${champion.gold}</li>
                <img src={champion.image} alt={champion.name} />
              </div>
            )}
      </div>
    );
  };
};

export default ChampionList;
