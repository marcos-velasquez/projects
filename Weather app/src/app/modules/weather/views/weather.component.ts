import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationStore } from '@modules/location/data/services';
import { LocationFinderComponent } from '@modules/location/views/location-finder/location-finder.component';
import { WeatherService } from '../data/services/weather.service';
import { WeatherTodayComponent } from '../components/weather-today/weather-today.component';
import { WeatherForecastComponent } from '../components/weather-forecast/weather-forecast.component';

@Component({
  selector: 'wh-weather',
  templateUrl: './weather.component.html',
  standalone: true,
  imports: [
    CommonModule,
    LocationFinderComponent,
    WeatherTodayComponent,
    WeatherForecastComponent,
  ],
})
export class WeatherComponent {
  constructor(
    private weatherService: WeatherService,
    private locationStore: LocationStore
  ) {
    effect(() => {
      if (this.locationStore.location()) {
        this.weatherService.setWeather(this.locationStore.location()!);
      }
    });
  }
}
