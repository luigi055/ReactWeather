import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router'; //manage the Routes

//i can use regular links like <a href="#/about>About</a> althogh this still works
//the Link method has more features and is better to use in contrast with a

//i can set the active class ".active" specifing with activeClassName="active" property and when the link detect that it is showing the info it will get the .active class this is one of the difference with <a>

//Since Get Weather is indexed in main it always will get .active with activeClassName with Link jsx
//So use IndexLink jsx tag instead

class Nav extends Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(e) {
    e.preventDefault();
    const location = this.refs.search.value;
    const encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.search.value = '';
       window.location.hash = `#/?location=${encodedLocation}`;

    }
  }

  render() {
     return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
                Get Weather
              </IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
                About
              </Link>
            </li>
            <li>
            <Link to="/examples" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
              Examples
            </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather by city" ref="search" />
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Nav;
