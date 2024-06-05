import { Location } from './location.model';

export class LocationList {
  public readonly locations: { name: string; location: Location }[] = [];

  public get() {
    return this.locations;
  }
  public insert(location: { name: string; location: Location }) {
    this.locations.push(location);
  }
}
