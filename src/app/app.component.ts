import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/services/weather.service';
import { weatherData } from './model/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private weatherservice : WeatherService){
  }
  cityName: string = "hyderabad";
  weatherData!: weatherData; 
  
  ngOnInit(): void {
  this.getWeatherData(this.cityName);
  this.cityName = '';
  }

  onSubmit() {
  this.getWeatherData(this.cityName); 
  this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherservice.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    });
  }
  title = 'weatherApp';
}
