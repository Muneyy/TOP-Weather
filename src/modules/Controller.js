/* eslint-disable no-use-before-define */
import * as asyncFetchStuff from './asyncFetchStuff';
import * as DOM from './DOM';

async function initialize(form) {
    const location = getLocation(form);
    await DOM.displayLoading();
    const weatherData = await asyncFetchStuff.weatherFetch(location);
    const weatherGIF = await asyncFetchStuff.gifFetch();
    await DOM.removeLoading();
    await DOM.displayWeatherData(weatherData);
    await DOM.displayWeatherGIF(weatherGIF, weatherData.name);
}

function getLocation(form) {
    return form.elements.location.value;
}

// eslint-disable-next-line import/prefer-default-export
export { initialize };
