import React, { Component } from 'react';
import axios from 'axios';
import _ from "lodash";
import HeroForm from './HeroForm';
import DisplayHero from './DisplayHero';
import './app.css';


class App extends Component {
  state = {
    superheroes: [],
    searchedhero1: "",
    searchedhero2: ""
  };

  componentDidMount() {
    axios
      .get(`https://akabab.github.io/superhero-api/api/all.json`)
      .then(res => {
        const originalData = res.data;
        const superheroes = _.uniqBy(originalData, "name");
        this.setState({
          superheroes
        });
      });
  }

  handleSearch = (inputValue1, inputValue2) => {
    this.setState({
      searchedhero1: inputValue1,
      searchedhero2: inputValue2
    });
  };

  render() {
    return (
      <div>
        <HeroForm searchedHero={this.handleSearch} />
        <DisplayHero superheroes={this.state.superheroes} searchedhero1={this.state.searchedhero1} searchedhero2={this.state.searchedhero2} />
      </div>
    )
  }
}

export default App;