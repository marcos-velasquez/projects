export class LocationURLBuilder {
  private URL =
    'https://api.weatherapi.com/v1/search.json?key=bad0d6018186427c9bf45247241401&q=#term';

  constructor(private term: string) {}

  public build() {
    return this.URL.replace('#term', this.term);
  }
}
