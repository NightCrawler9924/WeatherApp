# WeatherApp

A weather lookup tool built on the OpenWeatherMap API. Enter a city and get its current conditions, resolved through geocoding to latitude/longitude before the weather request.

## Contents

- `app.py` — Python client that geocodes a city name and fetches current weather from the OpenWeatherMap API.
- `index.html`, `script.js`, `style.css` — a browser front end for the same lookup.

## Running the Python client

Requires a free OpenWeatherMap API key.

```bash
pip install requests
python app.py
```

Set your API key in the script (or as an environment variable) before running. The key is not committed to the repository.

## Notes

Built as a practice project for working with REST APIs, JSON responses, and geocoding.

## License

Released under the MIT License.
