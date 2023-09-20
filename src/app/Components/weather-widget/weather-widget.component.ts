import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {

  weatherData:any;
  constructor() {}

  ngOnInit(){    
    this.weatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    console.log(this.weatherData);
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=6e2a786372af43ec35726219d847e013')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})
  }

  setWeatherData(data: any){
    this.weatherData = data;
    let sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
    this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.weatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.weatherData.temp_celcius = (this.weatherData.main.temp - 273.15).toFixed(0);
    this.weatherData.temp_min = (this.weatherData.main.temp_min - 273.15).toFixed(0);
    this.weatherData.temp_max = (this.weatherData.main.temp_max - 273.15).toFixed(0);
    this.weatherData.temp_feels_like = (this.weatherData.main.feels_like - 273.15).toFixed(0);
  }

}
