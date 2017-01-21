import React, { Component } from 'react';
import { Link } from 'react-router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Winter Semester 2017 Notes</h2>
          <nav className="main-nav">
            <ul>
              <li><Link to={'/economics'}>Economics</Link></li>
              <li><Link to={'/communication'}>Communication</Link></li>
            </ul>
          </nav>
        </div>
        <div className="App-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
