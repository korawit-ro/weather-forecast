import { DarkSkyAPI } from "./weather-darksky.dto";
import { WeatherCache, InitCache } from "./weather.cache";
import { toDarkSkyAPI } from "./weather.helper";

export class WeatherAPI {
  public weatherAPIKey: string;

  constructor(init: Partial<WeatherAPI>) {
    Object.assign(this, init);
  }

  public static async init(weatherAPIKey: string): Promise<WeatherAPI> {
    await InitCache();
    return new WeatherAPI({ weatherAPIKey });
  }

  public async getDarkSkyAPI(
    latitude: number,
    longitude: number
  ): Promise<DarkSkyAPI> {
    const weatherData = await WeatherCache(
      this.weatherAPIKey,
      latitude,
      longitude
    );
    return toDarkSkyAPI(weatherData);
  }
}
