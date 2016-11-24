import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'; //manage the Routes

//i can use regular links like <a href="#/about>About</a> althogh this still works
//the Link method has more features and is better to use in contrast with a

//i can set the active class ".active" specifing with activeClassName="active" property and when the link detect that it is showing the info it will get the .active class this is one of the difference with <a>

//Since Get Weather is indexed in main it always will get .active with activeClassName with Link jsx
//So use IndexLink jsx tag instead

const Nav = () => {
  return (
    <nav>
      <h2>Navigation Component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
        Get Weather
      </IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
        About
      </Link>
      <Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
        Examples
      </Link>
    </nav>
  );
};

export default Nav;
