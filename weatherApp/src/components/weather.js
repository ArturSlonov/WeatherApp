import React from 'react';

class Weather extends React.Component
{
  render(){
    return (
      <div>
      {this.props.city &&
      <div className='rt'>
      <p>Местоположение: {this.props.city} {this.props.country}</p>
      <p>Температура: {Math.round((this.props.temp - 273)*10)/10} *C</p>
      <p>Восход солнца: {this.props.sunrise}</p>
      <p>Заход солнца: {this.props.sunset}</p>
      </div>
    }
    <p>{this.props.er}</p>
    </div>
    );
  }

}

export default Weather;
