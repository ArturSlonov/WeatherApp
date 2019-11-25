import React from 'react';

class Form extends React.Component
{
  render(){
    return (
    <form onSubmit = {this.props.WeatherMethod}>
    <input type = 'text' name = 'city' placeholder = 'введите город'/>
    <button>получить погоду</button>
    </form>
    );
  }

}

export default Form;
