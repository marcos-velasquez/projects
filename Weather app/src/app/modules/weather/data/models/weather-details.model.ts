export class WeatherDetails {
  constructor(
    private tempMin: number,
    private tempMax: number,
    private humidity: number,
    private description: string,
    private feelsLike: number = 0,
    private wind: number = 0
  ) {}

  public getDescription() {
    return this.description;
  }

  public getHumidity() {
    return this.humidity;
  }

  public getWind() {
    return this.wind;
  }

  public getTempMax() {
    return Math.round(this.tempMax);
  }

  public getTempMin() {
    return Math.round(this.tempMin);
  }

  public getFeelsLike() {
    return Math.round(this.feelsLike);
  }
}
