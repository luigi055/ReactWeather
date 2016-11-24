import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../api/openWeatherMap';


class Weather extends Component {
  constructor(props) {
    super(props);
      this.state = {
        isLoading: false
      };
      this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {
    const self = this;
    this.setState({ isLoading: true });
    openWeatherMap.getTemp(location).then(temp => {
      self.setState({
        location,
        temp,
        isLoading: false
      });
    }, errorMessage => {
      self.setState({ isLoading: false });
      alert(errorMessage);
    });
  }

  render() {
    let { isLoading, temp, location } = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching Weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }
    return (
      <main>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </main>
    );
  }
}

export default Weather;
