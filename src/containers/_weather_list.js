/*
*
*Component haline getirmeden önceki durum.
*Component yapmasaydık Sparklines tekrarlıcaktı.
*
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';

class WeatherList extends Component {

  renderWeather(cityData) {

    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    console.log(temps);

    return (<tr key={name}>
      <td>{name}</td>
      <td>
        <Sparklines height={120} width={180} data={temps}>
          <SparklinesLine color="red"/>
        </Sparklines>
      </td>
      <td>
        <Sparklines height={120} width={180} data={temps}>
          <SparklinesLine color="red"/>
        </Sparklines>
      </td>
      <td>
        <Sparklines height={120} width={180} data={temps}>
          <SparklinesLine color="red"/>
        </Sparklines>
      </td>
    </tr>);
  }

  render() {
    return (<table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Tempareture</th>
          <th>Pressure</th>
          <th>Humidity</th>
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


yukarıdaki ile aynı func tek parametre alırsa kullnılabilir.
function mapStateToProps(state){
  return {weather:state.weather};
}


export default connect(mapStateToProps)(WeatherList);
*/
