import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Location } from '@modules/location/data/models/location.model';
import { WeatherURLBuilder } from './weather-url.builder';
import { WeatherMapper } from './mappers/weather.mapper';
import { WeatherEntity } from './entities/weather.entity';
import { NullWeather, Weather } from '../models';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  public readonly weather = signal<Weather>(NullWeather);

  constructor(private http: HttpClient) {}

  public setWeather(location: Location): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http
        .get<WeatherEntity>(new WeatherURLBuilder(location).build())
        .subscribe({
          next: (entity) => {
            this.weather.set(WeatherMapper.fromEntityToModel(entity));
            resolve();
          },
          error: (error) => reject(error),
        });
    });
  }
}
