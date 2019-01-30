import React, { Component } from 'react';
import './displayhero.css';
import { Bar } from "react-chartjs-2";

class DisplayHero extends Component {
  state = {
    chosenHero: ""
  }

  BarGraph = (selectedHero) => {
  const { superheroes } = this.props;
  const stats = superheroes.filter(superhero => superhero.name.toLowerCase().indexOf(selectedHero.toLowerCase()) >=0).map((superhero) => {
          return superhero.powerstats
        })
  const statArray = (Object.values(stats[0]));
  const data = {
  labels: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat" ],
  datasets: [
    {
      label: null,
      backgroundColor: "blue",
      borderColor: "black",
      borderWidth: 1,
      hoverBackgroundColor: "tomato",
      hoverBorderColor: "black",
      data: statArray
    }]
  };
  return <Bar 
    data={data} 
    options={{}} 
    legend={{ display: false }} 
    options={{ scales: 
      { xAxes: 
        [{ gridLines: 
          { display: false , 
          color: "white" },
          ticks: {
            fontColor: "white",
            beginAtZero: true,
          }, 
        }], 
        yAxes: 
        [{ gridLines: 
          { display: false, 
            color: "white" },
          ticks: {
              fontColor: "white",
              beginAtZero: true,
          }, 
        }] 
    } }} />;
  }

  renderSuperhero(selectedHero) {
    const { superheroes } = this.props;
    const exacthero = new RegExp("^" + selectedHero + "$", "i");
    console.log(superheroes)
    const noHeroFound = superheroes
        .filter(superhero => superhero.name.toLowerCase().match(exacthero))
      .map((superhero, index) => { return superhero.name })
    if (!selectedHero) {
      return null;
    } else if (noHeroFound[0] === undefined ) {
      return <div className="errorContainer">
        <h1 className="error">There is no superhero or villain under that name. Please try again!</h1>
      </div> } 
      else {
      return superheroes
        .filter(superhero => superhero.name.toLowerCase().match(exacthero))
        .map((superhero, index) => {
          console.log(superhero);
          return (
            <div className="stats">
              <li key={index}>
                <img src={superhero.images.md} alt="Selected Superhero" />
                <h1 className="title">{superhero.name}</h1>
                {this.BarGraph(superhero.name)}
                <h2>Total Power Level = {superhero.powerstats.combat + superhero.powerstats.intelligence + superhero.powerstats.durability + superhero.powerstats.power + superhero.powerstats.speed + superhero.powerstats.strength }</h2>
              </li>
            </div>
          )
        });
    }
  }

  
  render() {
    const { searchedhero1, searchedhero2 } = this.props;
    return (
      <div className="superheroWrapper">
        <div className="superheroInfo">{this.renderSuperhero(searchedhero1)}</div>
        <div className="superheroInfo">{this.renderSuperhero(searchedhero2)}</div>
      </div>
    )
  }
}

export default DisplayHero;
