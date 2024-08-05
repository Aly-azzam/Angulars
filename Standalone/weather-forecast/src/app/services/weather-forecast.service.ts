import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService {
  private apiUrl = 'https://localhost:7218/weatherforecast'; 

  constructor(private http: HttpClient) { }

  async getWeatherForecasts(): Promise<any[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  }
}
