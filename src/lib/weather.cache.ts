import { caching, MemoryCache } from "cache-manager";
import superagent from "superagent";
import { WeatherAPICom } from "./weather-apicom.dto";

const latlonCacheKey = (lat: number, lon: number) => `${lat}${lon}`;

let memoryCache: MemoryCache;

/* Whereas forecast weather data is updated every 6 hours in a day. */
const WeatherAPIUrl = "http://api.weatherapi.com/v1/forecast.json";

async function callAPI(key: string, latitude: number, longitude: number) {
  return (
    await superagent.get(WeatherAPIUrl).query({
      key,
      q: `${latitude},${longitude}`,
      days: "2",
    })
  ).body;
}

export async function InitCache() {
  memoryCache = await caching("memory", {
    ttl: 1000 * 60 * 60 * 6 /* 6 hour */,
  });
}

export async function WeatherCache(
  apiKey: string,
  latitude: number,
  longitude: number
): Promise<WeatherAPICom> {
  if (!memoryCache) {
    throw new Error("MemoryCache not ready, please try again");
  }

  let weatherResponse: WeatherAPICom = await memoryCache.get<any>(
    latlonCacheKey(latitude, longitude)
  );
  if (!weatherResponse) {
    weatherResponse = await callAPI(apiKey, latitude, longitude);
    await memoryCache.set(latlonCacheKey(latitude, longitude), weatherResponse);
  }

  return weatherResponse;
}
