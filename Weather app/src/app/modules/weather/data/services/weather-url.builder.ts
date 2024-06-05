import { Location } from '@modules/location/data/models/location.model';

export class WeatherURLBuilder {
  private URL =
    'https://api.weatherapi.com/v1/forecast.json?key=bad0d6018186427c9bf45247241401&q=#lat,#lon&aqi=no&days=5&alerts=no';

  constructor(private location: Location) {}

  public build() {
    return this.URL.replace('#lat', this.location.toString().lat).replace(
      '#lon',
      this.location.toString().lon
    );
  }
}
