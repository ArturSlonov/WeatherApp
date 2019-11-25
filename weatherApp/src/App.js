import React from 'react';
import Info from './components/info';
import Form from './components/Form';
import Weather from './components/weather';




const API_KEY = "878b671798d54c52cc9f88bc5fa0ddb8";

class App extends React.Component {

 state = {
    temp: undefined,
    city:undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

gettingWeather = async (e) => {
  e.preventDefault();
  let city = e.target.elements.city.value;

if(!city){
  this.setState(
    {
       temp: undefined,
       city:undefined,
       country: undefined,
       sunrise: undefined,
       sunset: undefined,
       error: "введите название города"
     }
  )
} else {

  const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
  const data = await api_url.json();

  if(data.message === "city not found") {
    this.setState(
      {
         temp: undefined,
         city:undefined,
         country: undefined,
         sunrise: undefined,
         sunset: undefined,
         error: "некорректное название города"
       })

  } else {

  var date = new Date();
  var time = data.sys.sunrise;
  date.setTime(time);
  var dat = date.getHours() + ':' +  date.getMinutes() + ":" + date.getSeconds();

  var date1 = new Date();
  var time1 = data.sys.sunset;
  date1.setTime(time1);
  var dat1 = date1.getHours()+12 + ':' +  date1.getMinutes() + ":" + date1.getSeconds();

    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      sunrise: dat,
      sunset: dat1,
      error: ""

    })

  }


}

};

  render() {
    return (
  <div className = 'wrapper'>
    <div className = 'main'>
      <div className="container">
           <div className = 'row'>
                  <div className = 'col-sm-5 info '><Info/></div>
                  <div className = 'col-sm-7 form'>
                  <Form WeatherMethod = {this.gettingWeather} />
                  <Weather
                  temp = {this.state.temp}
                  city = {this.state.city}
                  country = {this.state.country}
                  sunrise = {this.state.sunrise}
                  sunset = {this.state.sunset}
                  er = {this.state.error}
                  />
          </div>
      </div>
    </div>
  </div>



  </div>
    );
    }
}


export default App;
