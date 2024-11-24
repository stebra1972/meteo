

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

    const loadingDiv = document.getElementById('loading');
    const weatherDiv = document.getElementById('weather');

    loadingDiv.classList.remove('hidden');
    weatherDiv.innerHTML = '';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            loadingDiv.classList.add('hidden');
            weatherDiv.innerHTML = `
                <h2>Weather in ${data.resolvedAddress}</h2>
                <p>Temperature: ${data.currentConditions.temp}°C</p>
                <p>Conditions: ${data.currentConditions.conditions}</p>
            `;
            updateBackground(data.currentConditions.conditions);
        })
        .catch(error => {
            loadingDiv.classList.add('hidden');
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please try again.');
        });
}

function updateBackground(conditions) {
    const body = document.body;
    if (conditions.toLowerCase().includes('sun')) {
        body.style.backgroundImage = "url('Images/sun.jpeg')";
    } else if (conditions.toLowerCase().includes('cloudy')) {
        body.style.backgroundImage = "url('Images/cloud.jpeg')";
    } else if (conditions.toLowerCase().includes('rain')) {
        body.style.backgroundImage = "url('Images/rain.jpeg')";
    } else if (conditions.toLowerCase().includes('clear')) {
        body.style.backgroundImage = "url('Images/sun.jpeg')";
    } else if (conditions.toLowerCase().includes('overcast')) {
        body.style.backgroundImage = "url('Images/cloud.jpeg')";

    } else {
        body.style.backgroundImage = "";
    }
}

