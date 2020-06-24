import ipLookUp from './ip_lookup';
import weatherApi from './weather_api';

const dom = (() => {
    const selectors = {
        body: document.querySelector('body'),
    };

    const createContentSection = () => {
        selectors.contentSection = document.createElement('section');
        selectors.contentSection.setAttribute('id', 'app');
        selectors.body.prepend(selectors.contentSection);
    }

    const createLocationHeader = (data) => {
        selectors.locationHeader = document.createElement('h3');
        selectors.locationHeader.appendChild(document.createTextNode(data));
        selectors.contentSection.prepend(selectors.locationHeader);
    }

    const storeLocationAtHeader = (data) => {
        createLocationHeader(`${data.city}, ${data.country}`)
        return data;
    }

    const ipLookUpAsyncOperations = (promise) => {
        return promise()
               .then(data => storeLocationAtHeader(data));
    }

    const createWeatherSection = () => {
       selectors.weatherSection = document.createElement('section');
       selectors.weatherSection.setAttribute('id', 'weather-stats');
       selectors.contentSection.prepend(selectors.weatherSection);
    }

    const createWeatherTempHeader = (data) => {
        selectors.weatherTempHeaderDiv = document.createElement('div');
        selectors.weatherTempHeader = document.createElement('h1');
        selectors.weatherTempHeaderDiv.setAttribute('id', 'weather-header');
        selectors.weatherTempHeader.appendChild(document.createTextNode(data));
        selectors.weatherTempHeaderDiv.appendChild(selectors.weatherTempHeader);
        selectors.weatherSection.appendChild(selectors.weatherTempHeaderDiv);
    }

    const storeWeathertemp = (data) => {
        createWeatherTempHeader(Math.round(data.main.temp - 273.15));
        return data;
    }

    const createWeatherTempDescription = (data) => {
        selectors.weatherTempDescription = document.createElement('h4');
        selectors.weatherTempDescription.appendChild(document.createTextNode(data));
        selectors.weatherSection.appendChild(selectors.weatherTempDescription);
    }

    const storeWeatherDesc = (data) => {
        createWeatherTempDescription(data.weather[0].description);
        return data;
    }

    const createWeatherOtherStatsDiv = () => {
        selectors.weatherTempOtherStatsDiv = document.createElement('div');
        selectors.weatherTempOtherStatsDiv.setAttribute('id', 'weather-extra-stats');
        selectors.weatherSection.appendChild(selectors.weatherTempOtherStatsDiv);
    }

    const createWeatherTempFeelsLike = (data) => {
        selectors.weatherTempFeelsLike = document.createElement('p');
        selectors.weatherTempFeelsLike.appendChild(document.createTextNode(`Feels Like: ${Math.round(data - 273.15)}`));
        selectors.weatherTempOtherStatsDiv.appendChild(selectors.weatherTempFeelsLike);
    }

    const storeWeatherTempFeelsLike = (data) => {
        createWeatherTempFeelsLike(data.main.feels_like);
        return data;
    }

    const createWeatherPressure = (data) => {
        selectors.weatherPressure = document.createElement('p');
        selectors.weatherPressure.appendChild(document.createTextNode(`Pressure: ${data}`));
        selectors.weatherTempOtherStatsDiv.appendChild(selectors.weatherPressure);
    }

    const storeWeatherPressure = (data) => {
        createWeatherPressure(data.main.pressure);
        return data;
    }

    const createWeatherHumidity = (data) => {
        selectors.weatherHumidity = document.createElement('p');
        selectors.weatherHumidity.appendChild(document.createTextNode(`Humidity: ${data}`));
        selectors.weatherTempOtherStatsDiv.appendChild(selectors.weatherHumidity);
    }

    const storeWeatherHumidity = (data) => {
        createWeatherHumidity(data.main.humidity);
        return data;
    }

    const createWeatherWindSpeed = (data) => {
        selectors.weatherWindSpeed = document.createElement('p');
        selectors.weatherWindSpeed.appendChild(document.createTextNode(`Wind: ${data}`));
        selectors.weatherTempOtherStatsDiv.appendChild(selectors.weatherWindSpeed);
    }

    const storeWeatherWindSpeed = (data) => {
        createWeatherWindSpeed(data.wind.speed);
        return data;
    }

    const storeWeatherOtherStats = (data) => {
        createWeatherOtherStatsDiv();
        storeWeatherTempFeelsLike(data);
        storeWeatherPressure(data);
        storeWeatherHumidity(data);
        storeWeatherWindSpeed(data);
        return data;
    }

    const weatherAsyncOperations = (promise) => {
        return promise
               .then(data => storeWeathertemp(data))
               .then(data => storeWeatherDesc(data))
               .then(data => storeWeatherOtherStats(data))
    }

    const run = () => {
        createContentSection();
        createWeatherSection();
        weatherAsyncOperations(weatherApi.apiCall(ipLookUpAsyncOperations(ipLookUp.apiCall)));
    };
    return {run};
})();

export default dom;