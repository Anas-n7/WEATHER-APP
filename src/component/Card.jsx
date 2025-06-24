import React, { useState } from "react";
import Button from "./Button";

function Card() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeather = async () => {
    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.cod === 200) {
        setWeather(data);
        console.log("Weather data:", data);
      } else {
        alert("City not found!");
        setWeather(null);
      }
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  return (
    <div className="w-md text-black text-center border-white border-2 rounded-2xl py-2 bg-[#F4FAFB] [box-shadow:0_0_30px_rgba(0,_0,_0,_0.1)] [transition:transform_0.3s_ease-in-out] mx-6">
      <div>
        <h3 className="text-xl font-bold">WEATHER APP</h3>
        <p>Check your weather here!</p>
        <div className="flex flex-col justify-center text-center items-center">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                getWeather();
              }
            }}
            className="text-center border border-gray-300 p-2 focus:outline-none my-3 rounded"
          />
          <Button
            text="GET WEATHER"
            tabIndex={0}
            onClick={getWeather}
            className="mt-2"
          />

          {weather && (
            <div>
              <h2 className="font-bold my-3">{weather.name}</h2>
              <p className="text-red-600 my-3">
                {new Date(weather.dt * 1000).toLocaleTimeString()}
              </p>
              <div className="my-2">
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                  className="mx-auto"
                />
              </div>
              <h2 className="font-bold my-3">{weather.main.temp}°C</h2>
              <h3 className="my-3 capitalize">
                {weather.weather[0].description}
              </h3>
              <p className="text-red-600 my-3">
                Wind Speed: {weather.wind.speed} m/s
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
