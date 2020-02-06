import React, { Component } from 'react';
import './ChampionCreate.css';

class ChampionCreate extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      gold: '',
      class: '',
      image: ''
    };
  }

  handleSubmit = async (event) => {
    const newChampion = {
      name: this.state.name,
      gold: 5,
      class: 'Sheperd',
      image: 'http://u.cubeupload.com/WickedAmusingbus/Spark.gif'
    }
    await this.setState({name: ''})
    await this.props.createChampion(newChampion)
  }

  // Prevent Message Creation if any field is empty.
  handleEmptyFields = async (event) => {
    // 'event.preventDefault()' Stops the page from reloading on every change to the message.
    event.preventDefault()
    if (!this.state.name) { // State "name" is empty
      alert("The Field 'Name' is empty! Cannot create Champion.")
    } else { // All fields hold values
      await this.handleSubmit()
    }
  };

  handleNameChange = async (event) => {
    await this.setState({name: event.target.value})
  }



  render() {
    return (
      <div id="champCreateWrapper" className="champBox">

        <div id="champCreateTitle">
          <h3>Create A Champion</h3>
        </div>

        <div id="champCreateList">
          <form className="champCreateFieldContainer" onSubmit={this.handleEmptyFields}>

            <div className="champCreateFieldTitle"> Champion Name: </div>
            <input className="champCreateTextarea" type="text" value={this.state.name} onChange={this.handleNameChange} />

            <div className="formField">
            <input className="formButton" type="submit" value="Submit" />
            </div>
          </form>
        </div>

      </div>
    );
  };
};

export default ChampionCreate;
