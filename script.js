const apiKey = '933b9713b1514590c78d9dea9f94cfbe';

// Function to fetch and display weather
async function fetchWeather(city) {
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
    const geoResponse = await fetch(geoUrl);
    const geoData = await geoResponse.json();

    if (!geoData.length) {
        alert('City not found!');
        return;
    }

    const { lat, lon, name, country } = geoData[0];
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    if (weatherData.cod === 200) {
        const temp = weatherData.main.temp - 273.15;
        const humidity = weatherData.main.humidity;
        const pressure = weatherData.main.pressure;
        const feelsLike = weatherData.main.feels_like - 273.15;

        // Update the UI with the data
        document.getElementById('location').innerText = `${name}, ${country}`;
        document.getElementById('temperature').innerText = `${Math.round(temp)} °C`;
        document.getElementById('details').innerHTML = `
            <p>Humidity: ${humidity}%</p>
            <p>Pressure: ${pressure} hPa</p>
            <p>Feels Like: ${Math.round(feelsLike)} °C</p>
        `;
        
        // Show the weather data section
        document.querySelector('.weather-data').style.display = 'block';
    } else {
        alert('Error fetching weather data');
    }
}

// Event listener for the submit button
document.getElementById('submitBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city name');
    }
});
