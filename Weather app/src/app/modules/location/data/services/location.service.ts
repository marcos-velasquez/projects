import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { LocationEntity } from './entities/location.entity';
import { LocationList } from '../models/location-list.model';
import { LocationURLBuilder } from './location-url.builder';
import { LocationMapper } from './mappers/location.mapper';

@Injectable({ providedIn: 'root' })
export class LocationService {
  public readonly locationList = signal(new LocationList());

  constructor(private http: HttpClient) {}

  public setLocations(term: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http
        .get<LocationEntity[]>(new LocationURLBuilder(term).build())
        .subscribe({
          next: (entity) => {
            this.locationList.set(LocationMapper.fromEntityToModel(entity));
            resolve();
          },
          error: (error) => reject(error),
        });
    });
  }
}
