import React from 'react';

const WeatherMessage = ({ temp, location }) => {
  // const { temp, location } = props; //exactly the same above
  return <h3 className="text-center">It's {temp}° in {location}</h3>;
};

export default WeatherMessage;
