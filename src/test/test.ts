import { WeatherAPI, DarkSkyAPI } from '../index';

(async () => {

    const weatherAPI = await WeatherAPI.init('');
    const weatherData: DarkSkyAPI = await weatherAPI.getDarkSkyAPI(13, 100);

})();