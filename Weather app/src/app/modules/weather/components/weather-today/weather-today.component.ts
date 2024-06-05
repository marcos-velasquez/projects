import { Component, OnChanges, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '@modules/weather/data/services/weather.service';
import { Weather } from '@modules/weather/data/models';

@Component({
  selector: 'wh-weather-today',
  templateUrl: './weather-today.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class WeatherTodayComponent implements OnChanges {
  public elements: { name: string; value: string }[] = [];
  public weather: WritableSignal<Weather>;

  constructor(weatherService: WeatherService) {
    this.weather = weatherService.weather;
  }

  ngOnChanges() {
    this.elements = [
      { name: 'Feels like', value: `${this.weather().getFeelsLike()} °C` },
      { name: 'Wind', value: `${this.weather().getWind()} m/s` },
      { name: 'Humidity', value: `${this.weather().getHumidity()} %` },
      { name: 'Max Temp', value: `${this.weather().getTempMax()} °C` },
      { name: 'Humidity', value: `${this.weather().getTempMin()} °C` },
    ];
  }
}
