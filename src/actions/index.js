import axios from 'axios';
const API_KEY   = '51bf6e2d908377f9d845568f1e4a81c3';
const ROOT_URL  = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;//es6 syntax +API_KEY yerine

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},tr`;
  const request = axios.get(url);

  //console.log('Requset: ',request);
  return{
    type:FETCH_WEATHER,
    payload:request
  };
}
