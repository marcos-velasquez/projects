import { Component } from '@angular/core';
import { WeatherComponent } from './modules/weather/views/weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'weather-app';
}
