import { bootstrapApplication } from '@angular/platform-browser';
import { WeatherForecastComponent } from './app/weather-forecast/weather-forecast.component';

bootstrapApplication( WeatherForecastComponent)
  .catch(err => console.error(err));
