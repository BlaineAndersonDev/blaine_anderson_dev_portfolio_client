import React, { Component } from 'react';
import axios from 'axios';
import './Champion.css';
import ChampionList from './ChampionList.js';

class Champion extends Component {
  state = {
    champions: []
  };

  componentDidMount() {
    // On load, get list of all champions and send as props to ChampionList.
    this.getChampions();
  };

  // Retrieves all Champions from hosted server.
  getChampions = () => {
    // axios.get(`http://159.65.105.25:5001/api/champions`)
    axios.get(`http://localhost:5001/api/champions`)
      .then(res => {
        this.setState({ champions: res.data.results });
      })
  };

  render() {
    return (
      <div id="champWrapper">
        <ChampionList champions={this.state.champions}/>

        <div id="champCreateWrapper">
            <h3>Create a new Champion</h3>
        </div>




      </div>
    );
  };
};

export default Champion;
