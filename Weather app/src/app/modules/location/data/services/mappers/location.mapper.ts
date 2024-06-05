import { LocationList, Location } from '../../models';
import { LocationEntity } from '../entities/location.entity';

export class LocationMapper {
  public static fromEntityToModel(entity: LocationEntity[]): LocationList {
    const locationList = new LocationList();
    entity.forEach((location) => {
      locationList.insert({
        name: `${location.name} (${location.country})`,
        location: new Location(location.lat, location.lon),
      });
    });
    return locationList;
  }
}
