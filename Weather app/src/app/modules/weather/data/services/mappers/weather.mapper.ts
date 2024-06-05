import { WeatherEntity } from '../entities/weather.entity';
import { Weather, WeatherDetails, WeatherForecast } from '../../models';
export class WeatherMapper {
  public static fromEntityToModel(entity: WeatherEntity): Weather {
    return new Weather(
      `${entity.location.name} (${entity.location.country})`,
      entity.current.condition.icon,
      entity.current.temp_c,
      new WeatherDetails(
        entity.forecast.forecastday[0].day.mintemp_c,
        entity.forecast.forecastday[0].day.maxtemp_c,
        entity.current.humidity,
        entity.current.condition.text,
        entity.current.feelslike_c,
        entity.current.wind_mph
      ),
      entity.forecast.forecastday.map(({ date, day }) => {
        return new WeatherForecast(
          date,
          new WeatherDetails(
            day.mintemp_c,
            day.maxtemp_c,
            day.avghumidity,
            day.condition.text
          )
        );
      })
    );
  }
}
