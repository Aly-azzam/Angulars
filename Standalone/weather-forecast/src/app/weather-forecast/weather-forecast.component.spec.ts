import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherForecastComponent } from './weather-forecast.component';
import { WeatherForecastService } from 'c:/Users/aliaz/Desktop/FullStack2/weather-forecast/src/app/services/weather-forecast.service';

describe('WeatherForecastComponent', () => {
  let component: WeatherForecastComponent;
  let fixture: ComponentFixture<WeatherForecastComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, WeatherForecastComponent], // Include WeatherForecastComponent directly
      providers: [WeatherForecastService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges(); // Ensure the component initializes correctly
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve weather forecasts from the server', () => {
    const mockForecasts = [
      { date: '2021-10-01', temperatureC: 20, temperatureF: 68, summary: 'Mild' },
      { date: '2021-10-02', temperatureC: 25, temperatureF: 77, summary: 'Warm' }
    ];

    component.ngOnInit();

    const req = httpMock.expectOne('https://localhost:7218/weatherforecast');
    expect(req.request.method).toEqual('GET');
    req.flush(mockForecasts);

    expect(component.weatherForecasts).toEqual(mockForecasts);
  });
});
