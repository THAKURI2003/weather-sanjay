import React, { useEffect, useState } from "react";

const CITIES = ["Ottawa", "London", "Bejing", "Cairo", "Sydney"];
const API_KEY = "4b9bcc0a3dab4076a1924114251606";

export default function Home() {
  const [city, setCity] = useState(() => localStorage.getItem("city") || "Kathmandu");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!API_KEY) {
      setError("API key is missing.");
      setLoading(false);
      return;
    }
    fetchWeather(city);
  }, [city]);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`
      );
      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error?.message || `HTTP error: ${response.status}`);
      }

      setWeather({
        temp: data.current.temp_c,
        humidity: data.current.humidity,
        wind: data.current.wind_kph,
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
        location: data.location.name,
      });
    } catch (err) {
      setError("Failed to fetch weather data. Please try again later.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const selectedCity = e.target.value;
    setCity(selectedCity);
    localStorage.setItem("city", selectedCity);
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.header}>🌦️ Weather Forecast</h1>
      <select onChange={handleChange} value={city} style={styles.dropdown}>
        {CITIES.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <div style={styles.infoBox}>
        {loading && <p>Loading...</p>}
        {error && <p style={styles.error}>{error}</p>}
        {weather && !loading && !error && (
          <>
            <img src={weather.icon} alt={weather.condition} style={styles.icon} />
            <h2>{weather.temp}°C</h2>
            <p><strong>{weather.location}</strong></p>
            <p>{weather.condition}</p>
            <p>Humidity: {weather.humidity}%</p>
            <p>Wind Speed: {weather.wind} km/h</p>
          </>
        )}
      </div>
    </div>
  );
}
<footer>
        <p>&copy; 2023 Sanjay weather. All rights reserved.</p>
    </footer>

const styles = {
  wrapper: {
    padding: "100px",
    textAlign: "center",
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#e0f7fa",
    borderRadius: "20px",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
    fontFamily: "Helvetica, sans-serif",
  },
  header: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#00796b",
  },
  dropdown: {
    padding: "8px",
    borderRadius: "6px",
    fontSize: "16px",
    marginBottom: "20px",
  },
  infoBox: {
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
  },
  icon: {
    width: "60px",
    height: "60px",
  },
  error: {
    color: "red",
    fontWeight: "bold",
  },
};
