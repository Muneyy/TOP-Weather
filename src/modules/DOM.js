function displayLoading() {
    const contentWeather = document.querySelector('.content-weather');
    while (contentWeather.firstChild) {
        contentWeather.removeChild(contentWeather.firstChild);
    }
    const loadingGif = document.createElement('img');
    loadingGif.classList.add('loading');
    contentWeather.appendChild(loadingGif);
}
function removeLoading() {
    const contentWeather = document.querySelector('.content-weather');
    while (contentWeather.firstChild) {
        contentWeather.removeChild(contentWeather.firstChild);
    }
}

function displayWeatherData(weatherData) {
    console.log(weatherData);
    const contentWeather = document.querySelector('.content-weather');
    const container = document.createElement('div');
    container.classList.add('weather-data');

    const temperature = document.createElement('p');
    temperature.classList.add('temperature-text');
    temperature.textContent = `${Math.round(weatherData.main.temp - 273.15)}`;

    const feelsLike = document.createElement('p');
    feelsLike.classList.add('feels-like-text');
    feelsLike.textContent = `But it's gonna feel like ${Math.round(weatherData.main.feels_like - 273.15)}`;

    const weatherType = document.createElement('p');
    weatherType.classList.add('weather-type');
    weatherType.textContent = `Expect ${weatherData.weather[0].description} for the weather today`;

    container.appendChild(temperature);
    container.appendChild(feelsLike);
    container.appendChild(weatherType);

    contentWeather.appendChild(container);
}

async function displayWeatherGIF(weatherGIF) {
    console.log(weatherGIF);
    const container = document.querySelector('.weather-data');

    const containerGIF = document.createElement('div');
    containerGIF.classList.add('container-gif');
    const urlGIF = weatherGIF.data.images.original.url;
    containerGIF.style.backgroundImage = await `url(${urlGIF})`;
    container.appendChild(containerGIF);
}

export {
    displayLoading, removeLoading, displayWeatherData, displayWeatherGIF,
};
