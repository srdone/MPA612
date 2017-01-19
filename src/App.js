import React, { Component } from 'react';
import './App.css';

import { econDefinitions, econVideos, grammarDefinitions } from './data';
import { Repeat, Definition, YouTubeVideo } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Winter Semester 2017 Notes</h2>
        </div>
        <h3>Economics</h3>
        <Repeat data={econDefinitions} parentClass="definitions">
          <Definition/>
        </Repeat>
        <Repeat data={econVideos}>
          <YouTubeVideo />
        </Repeat>
        <h3>Grammar and Good Writing</h3>
        <Repeat data={grammarDefinitions} parentClass="definitions">
          <Definition/>
        </Repeat>
      </div>
    );
  }
}

export default App;
