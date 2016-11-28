import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import ErrorModal from './ErrorModal';
import openWeatherMap from '../api/openWeatherMap';


class Weather extends Component {
  constructor(props) {
    super(props);
      this.state = {
        isLoading: false,
      };
      this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {
    const self = this;
    this.setState({ 
      isLoading: true,
      errorMessage: null,
      location: null,
      temp: null
    });

    openWeatherMap.getTemp(location).then(temp => {
      self.setState({
        location,
        temp,
        isLoading: false
      });
    }, err => {
      self.setState({ 
        isLoading: false,
        errorMessage: err.message 
      });
    });
  }

  componentDidMount() {
    //reference to the Link component query object is where 
    //we can get the url variable from example.js
    const location = this.props.location.query.location; 

    if (location && location.length > 0) {
     this.handleSearch(location);
     window.location.hash = '#/'; //reset the query
    }
  }

  componentWillReceiveProps(newProps) {
    //update everytime there's changes in props
    //is used when in nav.js we're searching cities the url
    //variables it generates will finally update the props
    const location = newProps.location.query.location; 

    if (location && location.length > 0) {
     this.handleSearch(location);
     window.location.hash = '#/'; //reset the query
    }
  }

  render() {
    const { isLoading, temp, location, errorMessage } = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h1 className="text-center">Fetching Weather...</h1>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return <ErrorModal message='City not found' />;
      }
    }

    return (
      <main>
        <h1 className="text-senter page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </main>
    );
  }
}

export default Weather;
