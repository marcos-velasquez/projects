import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '@modules/weather/data/services/weather.service';

@Component({
  selector: 'wh-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class WeatherForecastComponent {
  constructor(public weatherService: WeatherService) {}
}
