async function weatherFetch(location) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=da681ec2a45210f0ee3b11ec75f010c6`,
            { mode: 'cors' },
        );
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.log(error);
    }
}

async function gifFetch(gif, place) {
    try {
        const response = await fetch(
            'https://api.giphy.com/v1/gifs/random?api_key=POF13ZGRPxujXTW0Q7Up2Vx8n6zJOM6s&tag=pokemon&rating=g',
            { mode: 'cors' },
        );
        const gifData = await response.json();
        return gifData;
    } catch (error) {
        console.log(error);
    }
}

// eslint-disable-next-line import/prefer-default-export
export { weatherFetch, gifFetch };
