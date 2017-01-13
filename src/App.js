import React, { Component } from 'react';
import './App.css';

import { definitions } from './definitions';
import { Repeat, Definition } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Economic Decision Making for Managers</h2>
        </div>
        <Repeat data={definitions} parentClass="definitions">
          <Definition/>
        </Repeat>
      </div>
    );
  }
}

export default App;
