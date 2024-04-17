import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function WeatherDashboard() {
  // Define mock weather data
  const mockWeatherData = {
    'New York': { 
      temperature: '22°C', 
      humidity: '56%', 
      windSpeed: '15 km/h'
    },
    'Los Angeles': {
      temperature: '27°C',
      humidity: '45%',
      windSpeed: '10 km/h',
    },
    'London': { 
      temperature: '15°C', 
      humidity: '70%', 
      windSpeed: '20 km/h' 
    },
  };

  // State to manage input value and weather data display
  const [cityInput, setCityInput] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle city search
  const handleSearch = () => {
    if (mockWeatherData.hasOwnProperty(cityInput)) {
      setWeatherData(mockWeatherData[cityInput]);
      setErrorMessage('');
    } else {
      setWeatherData(null);
      setErrorMessage('City not found.');
    }
  };

  // Function to handle clicking on previous searches
  const handlePreviousSearch = (city) => {
    setCityInput(city);
    handleSearch();
  };

  return (
    <div>
      <input 
        type="text" 
        id="citySearch" 
        placeholder="Search for a city..."
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
      />
      <button id="searchButton" onClick={handleSearch}>Search</button>
      <div id="weatherData">
        {weatherData ? (
          <>
            <div>Temperature: {weatherData.temperature}</div>
            <div>Humidity: {weatherData.humidity}</div>
            <div>Wind Speed: {weatherData.windSpeed}</div>
          </>
        ) : (
          <div>{errorMessage}</div>
        )}
      </div>
      <div id="previousSearches">
        {/* Render previous searches as buttons */}
        {Object.keys(mockWeatherData).map(city => (
          <button key={city} onClick={() => handlePreviousSearch(city)}>{city}</button>
        ))}
      </div>
    </div>
  );
}

// Define container and render the WeatherDashboard component
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<WeatherDashboard />);
