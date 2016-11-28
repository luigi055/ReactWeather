import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';
import About from './components/About';
import Weather from './components/Weather';
import Examples from './components/Examples';

//load foundation to our components with webpack
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App styles
require('style!css!sass!./styles/app.scss');

//weather will be the main view and will be the same path as its parent
//so IndexRoute means that it will be render in the same path in 
//this.props.children
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <IndexRoute component={Weather} /> 
    </Route>
  </Router>,
  document.getElementById('app')
);
