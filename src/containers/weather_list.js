import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component{

  renderWeather(cityData){

    const ciytName = cityData.city.name;

    return(
      <tr key={ciytName}>
        <td>{ciytName}</td>
      </tr>
    );
  }


  render(){
    return(
      <table className="table table-hover">
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
      </table>
    )
  }
}


function mapStateToProps({weather}){
  return {weather}; // {weather} === {weather:weather}
}

/*
yukarıdaki ile aynı func tek parametre alırsa kullnılabilir.
function mapStateToProps(state){
  return {weather:state.weather};
}
*/

export default connect(mapStateToProps)(WeatherList);
