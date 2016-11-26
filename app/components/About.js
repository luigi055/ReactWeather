import React from 'react';

const About = props => {
 return (
   <div>
      <h3 className="text-center">About Section</h3>
      <p>This is a weather application build on React, I have built this for The Complete react web developer course</p>
      <p>
        here are some of the tools i used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the javascript framework used
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name
        </li>
      </ul>
   </div>
 ); 
};

export default About;
