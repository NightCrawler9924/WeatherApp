import requests
import datetime

def get_weather(city, api_key):
    city = city.upper() 
    geo_url = f"https://api.openweathermap.org/geo/1.0/direct?q={city}&limit=1&appid={api_key}"
    response = requests.get(geo_url)

    if response.status_code != 200:
        print(f"Error fetching data from OpenWeatherMap. Status code: {response.status_code}")
        return

    data = response.json()

    if not data:
        print(f"No data found for city: {city}. Please check the city name and try again.")
        return

    lat = data[0]['lat']
    lon = data[0]['lon']
    city_name = data[0]['name']
    country = data[0]['country']
    print(f"Location: {city_name}, {country}")

    weather_url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api_key}"
    weather_response = requests.get(weather_url)
    weather_data = weather_response.json()

    if weather_data.get('cod') == 200:
        temp = weather_data['main']['temp'] - 273.15  
        humidity = weather_data['main']['humidity']
        pressure = weather_data['main']['pressure']
        feels_like = weather_data['main']['feels_like'] - 273.15 
        print(f"Current temperature: {round(temp)} °C")
        print(f"Humidity: {humidity}%")
        print(f"Pressure: {pressure} hPa")
        print(f"Feels Like: {round(feels_like)} °C")
    else:
        print("Error fetching current weather data.")


def main():
    api_key = '933b9713b1514590c78d9dea9f94cfbe'
    city = input("Enter the City Name: ")
    get_weather(city, api_key)

if __name__ == '__main__':
    main()
