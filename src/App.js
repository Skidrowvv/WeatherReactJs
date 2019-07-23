import React, { Component } from 'react';
import WeatherDisplay from './components/weather';
import '../src/App.css'


class App extends Component {
  constructor(){
    super();
    this.state={
      activePlace:0
    }
  }
  render() {
    const PLACES = [
      { name: "Palo Alto", zip: "94303" },
      { name: "San Jose", zip: "94088" },
      { name: "Santa Cruz", zip: "95062" },
      { name: "Honolulu", zip: "96803" }
    ];
    const activePlace = this.state.activePlace;
    return (
      <div className="container">
      <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
          {PLACES.map((place, index) => (
            <button
              className="skewBtn brick"
              key={index}
              onClick={() => {
                this.setState({activePlace:index})
              }}
            >
                {place.name}
            </button>
          ))}
    </div>
    );
  }
}

export default App;
