import React, { Component } from 'react';
import Nav from './Nav';

 
const Main = props => {
  return (
    <div>
      <Nav />
      <h2>Main Component!</h2>
      {props.children /*created automatically by react Router to display the components within the Route Main*/} 
    </div>
  );
};

export default Main;
