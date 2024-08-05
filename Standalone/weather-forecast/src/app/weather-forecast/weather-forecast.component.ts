import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from 'c:/Users/aliaz/Desktop/FullStack2/weather-forecast/src/app/services/weather-forecast.service';

@Component({
  selector: 'app-weather-forecast',
  standalone: true,
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
  providers: [WeatherForecastService]
})
export class WeatherForecastComponent implements OnInit {
  weatherForecasts: any[] = [];

  constructor(private weatherService: WeatherForecastService) { }

  async ngOnInit() {
    try {
      this.weatherForecasts = await this.weatherService.getWeatherForecasts();
    } catch (error) {
      console.error('Error fetching weather forecasts:', error);
    }
  }
}
