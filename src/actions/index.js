import axious from 'axios';

const API_KEY = '321a72237cf4ef6b75ba3588fbd8b618';
//const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?&appid=' + API_KEY;

// ES6 syntax using template strings
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

//Just for consistency
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${API_URL}&q=${city},AE`;
    const request = axious.get(url);


    return
    {
        type:FETCH_WEATHER;
        payload: request
    }
}