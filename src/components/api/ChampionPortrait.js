import React, { Component } from 'react';
import './ChampionPortrait.css';

class ChampionPortrait extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  };

  decreasePortraitId = async () => {
    let currentElement;
    let decreasedElement;
    if (Number(this.props.portrait.champion_portrait_id) === 1) { // Set the current element to the last portrait id.
      currentElement = "portraitDisplay" + this.props.portrait.champion_portrait_id
      decreasedElement = "portraitDisplay" + Number(this.props.totalPortraits)
    } else {
      currentElement = "portraitDisplay" + this.props.portrait.champion_portrait_id
      decreasedElement = "portraitDisplay" + (Number(this.props.portrait.champion_portrait_id) - 1)
    }
    const e = document.getElementById(currentElement);
    e.style.display = "none"
    const k = document.getElementById(decreasedElement);
    k.style.display = "inline"
  }

  increasePortraitId = async () => {
    let currentElement;
    let increasedElement;
    if (Number(this.props.portrait.champion_portrait_id) === Number(this.props.totalPortraits)) {
      currentElement = "portraitDisplay" + this.props.portrait.champion_portrait_id
      increasedElement = "portraitDisplay" + Number(1)
    } else {
      currentElement = "portraitDisplay" + this.props.portrait.champion_portrait_id
      increasedElement = "portraitDisplay" + (Number(this.props.portrait.champion_portrait_id) + 1)
    }
    const e = document.getElementById(currentElement);
    e.style.display = "none"
    const k = document.getElementById(increasedElement);
    k.style.display = "inline"
  }

  render() {
    return (
      <div id={"portraitDisplay" + this.props.portrait.champion_portrait_id} className="champPortWrapper">
        <div id="champPortTitle">
          <h3>Champions</h3>
          <h3>{this.props.portrait.champion_portrait_id}</h3>
          <h3>{this.props.portrait.name}</h3>
        </div>
        <div id="champPort">
          <p className="champPortButton" onClick={this.decreasePortraitId}> ⇦ </p>
          <img className="champImage" src={this.props.portrait.square_url} alt={this.props.portrait.champion_portrait_id} />
          <p className="champPortButton" onClick={this.increasePortraitId}> ⇨ </p>
        </div>
      </div>
    );
  };
};

export default ChampionPortrait;
