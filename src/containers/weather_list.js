import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'
import _ from 'lodash';

class WeatherList extends Component {

  renderWeather(cityData) {

    const name = cityData.city.name;
    //const temps = cityData.list.map(weather => weather.main.temp); Kelvin
    const temps = _.map(cityData.list.map(weather => weather.main.temp),(temp) => temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidties = cityData.list.map(weather => weather.main.humidity);
    /* es6 versionu aşağıda
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    */
    const {lon,lat } = cityData.city.coord;

    return (
    <tr key={name}>
      <td><GoogleMap lon={lon} lat={lat} /></td>
      <td><Chart data={temps} color="orange" units="C"/></td>
      <td><Chart data={pressures} color="green" units="hPa" /></td>
      <td><Chart data={humidties} color="gray"  units="%"/></td>
    </tr>
  );
}

  render() {
    return (<table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Tempareture (K)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
      </thead>
      <tbody>
        {this.props.weather.map(this.renderWeather)}
      </tbody>
    </table>)
  }
}

function mapStateToProps({weather}) {
  return {weather}; // {weather} === {weather:weather}
}

/*
yukarıdaki ile aynı func tek parametre alırsa kullnılabilir.
function mapStateToProps(state){
  return {weather:state.weather};
}
*/

export default connect(mapStateToProps)(WeatherList);
