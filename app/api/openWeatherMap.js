import axios from 'axios';

// const openWeatherMapAccount = {
//   site: 'http://www.openweathermap.com',
//   username: 'luigi055',
//   pw: '20269510'
// };

const API = 'c5a708598d4aab87ebd961ccbd8e24b7';
const LANG = 'en'; //pt, es, it, ru, fr, nl(dutch)
const UNITS = 'metric';  
  // UNITS='metric' for Celsius
  // UNITS='imperial' foR Farenheit

//check in the url if you're using the weather path and not find .../data/2.5/find?...
//find path show another api.
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?units=${UNITS}&lang=${LANG}&APPID=${API}`;

const openWeatherMap = {
  getTemp: location => {
    //avoid %20 when someone attemp to insert a empty space
    const encodedLocation = encodeURIComponent(location); 
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(res => {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, res => {
      throw new Error(res.data.message);
    });
  }
};

export default openWeatherMap;

