import { toQueryString } from '../utils';
import React, { useState, useEffect } from 'react';

export default function WeatherFunc() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const pollWeather = async (location) => {
            let url = 'http://api.openweathermap.org/data/2.5/weather?';
            const apiKey = process.env.REACT_APP_WEATHER_API

            const params = {
              lat: location.coords.latitude,
              lon: location.coords.longitude,
              appid: apiKey
            };

            url += toQueryString(params);


            const res = await fetch(url)
            if (res.ok) {
                const data = await res.json()
                setWeather(data);
            } else {
                alert("Fetch failed!");
            }

        }
        navigator.geolocation.getCurrentPosition(pollWeather)
    }, [])

    let content = <div className='loading'>loading weather...</div>;

    if (weather) {
      const temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content = <div>
        <p>{weather.name}</p>
        <p>{temp.toFixed(1)} degrees</p>
      </div>;
    }

    return (
      <section>
        <h1>Weather</h1>
        <div className='weather'>
          {content}
        </div>
      </section>
    );
}
