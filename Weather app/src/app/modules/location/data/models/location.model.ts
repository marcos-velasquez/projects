export class Location {
  constructor(private lat: number, private lon: number) {}

  public static createFormCurrentPosition(): Promise<Location> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) =>
          resolve(new Location(coords.latitude, coords.longitude)),
        (error) => reject(error)
      );
    });
  }

  public toString() {
    return { lat: this.lat.toString(), lon: this.lon.toString() };
  }
}
