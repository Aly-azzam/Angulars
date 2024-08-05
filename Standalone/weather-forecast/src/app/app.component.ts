import { Component } from '@angular/core';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherForecastComponent],
  template: `
    <h1>Weather Forecast App</h1>
    <app-weather-forecast></app-weather-forecast>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
}
