import React, { Component } from 'react'
import './heroform.css';

let scrollToElement = require("scroll-to-element");
scrollToElement("#id");

class HeroForm extends Component {
  state = {
    superhero1: "",
    superhero2: ""
  };

  scrollTo = () => {
    scrollToElement(".superheroWrapper", {
      offset: 0,
      ease: "outQuad",
      duration: 1000
    });
  };

  handleChange1 = event => {
    this.setState({
      superhero1: event.target.value
    });
  };

  handleChange2 = event => {
    this.setState(
      {
        superhero2: event.target.value
      }
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchedHero(this.state.superhero1, this.state.superhero2);
    this.setState({
      superhero1: "",
      superhero2: ""
    }, () => {
      this.scrollTo()
    });
  };

  render() {
    return <div className="container">
        <div className="wrapper">
          <p className="speechText">
            All you gotta do is type in the name of your superhero to
            compare stats. All names are searchable....just better not be a
            name that starts with f and ends with rancis
          </p>
          <h1>HEY YOU!!!</h1>
          <form className="heroForm" onSubmit={this.handleSubmit}>
            <div className="heroInputs">
              <input className="searchHero" type="text" placeholder="Enter Superhero/Villian #1" value={this.state.superhero1} onChange={this.handleChange1} required />
              <input className="searchHero" type="text" placeholder="Enter Superhero/Villian #2" value={this.state.superhero2} onChange={this.handleChange2} required />
            </div>
            <div className="submit">
              <button onClick={this.scrollTo}>Submit</button>
            </div>
          </form>
          <a href="https://superheroapi.com/ids.html" target="_blank" rel="noopener noreferrer">
            Superhero List
          </a>
        </div>
      </div>;
  }
}

export default HeroForm;
