function getWeather() {
    var location = document.getElementById('locationInput').value;
    var apiKey ='d221c002a7e6c764600341731b0f647b'; //'YOUR_API_KEY'; //Replace with your own API key
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          var temperature = data.main.temp;
          document.getElementById('result').innerText = `Temperature in ${location}: ${temperature}°C`;
        } else {
          document.getElementById('result').innerText = 'Location not found. Please try again.';
        }
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('result').innerText = 'Error fetching weather data. Please try again later.';
      });
  }