import React, { Component } from 'react';
import './App.css';

import { definitions } from './definitions';

class App extends Component {
  render() {
    console.log(definitions);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Economic Decision Making for Managers</h2>
        </div>
        <Definitions definitions={definitions}/>
      </div>
    );
  }
}

const Definitions = (props) => <ul className="definitions">{props.definitions.map(def => <li className="definition" key={def.name}>
    <div className="definition__name">{def.name}</div> - <div className="definition__description">{def.description}</div>
  </li>)}</ul>

export default App;
