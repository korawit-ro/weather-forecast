import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { WeatherAPICom, Hour } from "./weather-apicom.dto";
import { DarkSkyAPI } from "./weather-darksky.dto";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

export function toDarkSkyAPI(weatherData: WeatherAPICom): DarkSkyAPI {
  const fCurrent = weatherData.forecast.forecastday[0];
  const fTomorrow = weatherData.forecast.forecastday[1];
  const currentDayjs = dayjs().tz(weatherData.location.tz_id);
  let selectIndex: number = fCurrent.hour.findIndex(
    (hData) => currentDayjs.unix() < hData.time_epoch
  );
  if (selectIndex > 1) {
    selectIndex -= 1;
  } else if (selectIndex === -1) {
    selectIndex = 0;
  }
  const selectHour: Hour = fCurrent.hour[selectIndex];

  

  let c = 0;
  const hourList = fCurrent.hour.slice(selectIndex, selectIndex + 7);

  if (hourList.length < 6) {
    for (let idx = hourList.length; idx < 6; idx++) {
      hourList.push(fTomorrow.hour[c]);
      c++;
    }
  }

  return {
    latitude: weatherData.location.lat,
    longitude: weatherData.location.lon,
    timezone: weatherData.location.tz_id,
    currently: {
      time: currentDayjs.unix(),
      timeTxt: currentDayjs.tz(weatherData.location.tz_id).format(),
      summary: selectHour.condition.text,
      icon: selectHour.condition.icon,
      newIcon: selectHour.condition.icon,
      temperature: selectHour.temp_c,
      humidity: selectHour.humidity,
      windSpeed: selectHour.wind_kph,
    },
    hourly: {
      summary: weatherData.current.condition.text,
      icon: weatherData.current.condition.icon,
      newIcon: weatherData.current.condition.icon,
      data: hourList.map((hData) => ({
        time: hData.time_epoch,
        timeTxt: dayjs.unix(hData.time_epoch).tz(weatherData.location.tz_id).format(),
        summary: hData.condition.text,
        icon: hData.condition.icon,
        newIcon: hData.condition.icon,
        temperature: hData.temp_c,
        humidity: hData.humidity,
        windSpeed: hData.wind_kph,
      })),
    },
    daily: {
      summary: weatherData.current.condition.text,
      icon: weatherData.current.condition.icon,
      newIcon: weatherData.current.condition.icon,
      data: [
        {
          sunriseTime: dayjs
            .tz(
              `${fCurrent.date} ${fCurrent.astro.sunrise}`,
              "YYYY-MM-DD hh:mm A",
              weatherData.location.tz_id
            )
            .unix(),
          sunsetTime: dayjs
            .tz(
              `${fCurrent.date} ${fCurrent.astro.sunset}`,
              "YYYY-MM-DD hh:mm A",
              weatherData.location.tz_id
            )
            .unix(),
          temperatureMin: fCurrent.day.mintemp_c,
          temperatureMax: fCurrent.day.maxtemp_c,
        },
      ],
    },
    flags: {
      sources: ["cmc", "gfs", "icon", "isd", "madis"],
      "nearest-station": 7.269,
      units: "ca",
    },
    offset: dayjs().tz(weatherData.location.tz_id).utcOffset() / 60,
  };
}
