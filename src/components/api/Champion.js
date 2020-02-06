import React, { Component } from 'react';
import './Champion.css';
import superagent from 'superagent'
import ChampionList from './ChampionList.js';
import ChampionCreate from './ChampionCreate.js';

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
    superagent.get(`http://localhost:5001/api/champions`)
    .catch(err => {
      console.warn(err);
    })
    .then(res => {
      this.setState({ champions: res.body.results });
    })
  };

  // Create a champion, using information sent from ChampionCreate.js.
  createChampion = (champion) => {
    superagent.post('http://localhost:5001/api/champions')
      .set('Content-Type', 'application/json')
      .send({
        name: champion.name,
        gold: champion.gold,
        class: champion.class,
        image: champion.image
      })
      .catch(err => {
        console.warn(err);
      })
      .then(res => {
        console.log('Result: ' + res)
        this.getChampions();
      })
  };

  render() {
    return (
      <div id="champWrapper">
        <ChampionList champions={this.state.champions}/>

        <ChampionCreate createChampion={this.createChampion}/>

      </div>
    );
  };
};

export default Champion;
