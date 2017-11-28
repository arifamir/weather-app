import React, { Component } from 'react';

import { connect } from 'react-redux';

class WeatherList extends Component {

    renderWeather(citydata) {

        return (
            <tr>
                <td>{citydata.city.name}</td>
                <td>{citydata.city.name}</td>
                <td>{citydata.city.name}</td>
                <td>{citydata.city.name}</td>
            </tr>
        );
    }

    render() {

        console.log(this.props.weather);
        return (
            <table id="mytable" className="table table-bordred table-striped">
                <thead>
                <th>City</th>
                <th>Temperature</th>
                <th>Pressure</th>
                <th>Humidity</th>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

}

//function mapStateToProps(state) {
//    return {weather: state.weather};
//}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);