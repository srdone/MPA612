import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';
import { useBasename } from 'history';

import App from './App';
import { Communication, Economics } from './containers';
import './index.css';

ReactDOM.render(
  <Router history={useBasename(() => browserHistory)({basename: '/MPA612'})}>
    <Route path="/" component={App}>
      <Route path="economics" component={Economics}/>
      <Route path="communication" component={Communication}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
