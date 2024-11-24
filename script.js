document.getElementById('refresh').addEventListener('click', () => {
    const location = document.getElementById('location').value;
    if (location) {
        fetchWeather(location);
    } else {
        alert('Please enter a location');
    }
});

function fetchWeather(location) {
    const apiKey = '8B6FMU6QHXER47GM48F34T75H'; // Replace with your Visual Crossing API key
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = `
                <h2>Weather in ${data.resolvedAddress}</h2>
                <p>Temperature: ${data.currentConditions.temp}°C</p>
                <p>Conditions: ${data.currentConditions.conditions}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please try again.');
        });
}