import React, { Component } from 'react';
import Nav from './Nav';

 
const Main = props => {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="medium-6 large-4 small-centered columns">
          {props.children /*created automatically by react Router to display the components within the Route Main*/} 
        </div>
      </div>
    </div>
  );
};

export default Main;
