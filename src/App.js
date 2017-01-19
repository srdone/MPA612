import React, { Component } from 'react';
import './App.css';

import { econDefinitions, econVideos } from './data';
import { Repeat, Definition, YouTubeVideo } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Economic Decision Making for Managers</h2>
        </div>
        <Repeat data={econDefinitions} parentClass="definitions">
          <Definition/>
        </Repeat>
        <Repeat data={econVideos}>
          <YouTubeVideo />
        </Repeat>
      </div>
    );
  }
}

export default App;
