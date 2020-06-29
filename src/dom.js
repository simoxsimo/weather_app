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
  };

  const createLocationHeader = (data) => {
    if (!selectors.locationHeader) {
      selectors.locationHeader = document.createElement('h3');
      selectors.locationHeader.appendChild(document.createTextNode(data));
      selectors.contentSection.prepend(selectors.locationHeader);
    }
  };

  const storeLocationAtHeader = (data) => {
    createLocationHeader(`${data.city}, ${data.country}`);
    return data;
  };

  const createSearchButton = () => {
    if (!selectors.searchButton) {
      selectors.searchButton = document.createElement('button');
      selectors.searchButton.setAttribute('id', 'search');
      selectors.contentSection.prepend(selectors.searchButton);
    }
  };

  const ipLookUpAsyncOperations = (promise) => promise()
    .then(data => {
      createSearchButton();
      return data;
    })
    .then(data => storeLocationAtHeader(data));

  const createBackgroundDiv = () => {
    const bg = document.createElement('div');
    bg.setAttribute('id', 'bg');
    selectors.body.appendChild(bg);
  };

  const createWeatherSection = () => {
    selectors.weatherSection = document.createElement('section');
    selectors.weatherSection.setAttribute('id', 'weather-stats');
    selectors.contentSection.prepend(selectors.weatherSection);
  };

  const createWeatherTempHeader = (data) => {
    selectors.weatherTempHeaderDiv = document.createElement('div');
    selectors.weatherTempHeader = document.createElement('h1');
    selectors.weatherTempHeaderDiv.setAttribute('id', 'weather-header');
    selectors.weatherTempHeader.appendChild(document.createTextNode(data));
    selectors.weatherTempHeaderDiv.appendChild(selectors.weatherTempHeader);
    selectors.weatherSection.appendChild(selectors.weatherTempHeaderDiv);
  };

  const createTempsBtnsDiv = () => {
    selectors.tempsBtnsDiv = document.createElement('div');
    selectors.tempsBtnsDiv.setAttribute('id', 'temps-btns');
    selectors.weatherTempHeaderDiv.appendChild(selectors.tempsBtnsDiv);
  };

  const createCelsiusButton = () => {
    selectors.celsiusButton = document.createElement('button');
    selectors.celsiusButton.setAttribute('id', 'celsius-button');
    selectors.celsiusButton.appendChild(document.createTextNode('℃'));
    selectors.tempsBtnsDiv.appendChild(selectors.celsiusButton);
  };

  const createFahrenheitButton = () => {
    selectors.fahrenheitButton = document.createElement('button');
    selectors.fahrenheitButton.setAttribute('id', 'fahrenheit-button');
    selectors.fahrenheitButton.appendChild(document.createTextNode('℉'));
    selectors.tempsBtnsDiv.appendChild(selectors.fahrenheitButton);
  };

  const storeWeathertemp = (data, tempSymbol) => {
    createWeatherTempHeader(`${Math.round(data.main.temp)} ${tempSymbol}`);
    createTempsBtnsDiv();
    createCelsiusButton();
    createFahrenheitButton();
    return data;
  };

  const refreshTempStats = () => {
    selectors.weatherSection.textContent = '';
  };

  const createWeatherTempDescription = (data) => {
    selectors.weatherTempDescription = document.createElement('h4');
    selectors.weatherTempDescription.appendChild(document.createTextNode(data));
    selectors.weatherSection.appendChild(selectors.weatherTempDescription);
  };

  const storeWeatherDesc = (data) => {
    createWeatherTempDescription(data.weather[0].description);
    return data;
  };

  const createWeatherOtherStatsDiv = () => {
    selectors.weatherTempOtherStatsDiv = document.createElement('div');
    selectors.weatherTempOtherStatsDiv.setAttribute('id', 'weather-extra-stats');
    selectors.weatherSection.appendChild(selectors.weatherTempOtherStatsDiv);
  };

  const createWeatherTempFeelsLike = (data, tempSymbol) => {
    selectors.weatherTempFeelsLike = document.createElement('p');
    selectors.weatherTempFeelsLike.appendChild(document.createTextNode(`Feels Like: ${Math.round(data)} ${tempSymbol}`));
    selectors.weatherTempOtherStatsDiv.appendChild(selectors.weatherTempFeelsLike);
  };

  const storeWeatherTempFeelsLike = (data, tempSymbol) => {
    createWeatherTempFeelsLike(data.main.feels_like, tempSymbol);
    return data;
  };

  const createWeatherPressure = (data) => {
    selectors.weatherPressure = document.createElement('p');
    selectors.weatherPressure.appendChild(document.createTextNode(`Pressure: ${data} hPa(mb)`));
    selectors.weatherTempOtherStatsDiv.appendChild(selectors.weatherPressure);
  };

  const storeWeatherPressure = (data) => {
    createWeatherPressure(data.main.pressure);
    return data;
  };

  const createWeatherHumidity = (data) => {
    selectors.weatherHumidity = document.createElement('p');
    selectors.weatherHumidity.appendChild(document.createTextNode(`Humidity: ${data}%`));
    selectors.weatherTempOtherStatsDiv.appendChild(selectors.weatherHumidity);
  };

  const storeWeatherHumidity = (data) => {
    createWeatherHumidity(data.main.humidity);
    return data;
  };

  const createWeatherWindSpeed = (data) => {
    selectors.weatherWindSpeed = document.createElement('p');
    selectors.weatherWindSpeed.appendChild(document.createTextNode(`Wind: ${data} m/s`));
    selectors.weatherTempOtherStatsDiv.appendChild(selectors.weatherWindSpeed);
  };

  const storeWeatherWindSpeed = (data) => {
    createWeatherWindSpeed(data.wind.speed);
    return data;
  };

  const storeWeatherOtherStats = (data, tempSymbol) => {
    createWeatherOtherStatsDiv();
    storeWeatherTempFeelsLike(data, tempSymbol);
    storeWeatherPressure(data);
    storeWeatherHumidity(data);
    storeWeatherWindSpeed(data);
    return data;
  };

  const unixToDate = (unix) => {
    const dateObj = new Date(unix * 1000);
    return dateObj.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric' });
  };

  const createWeatherSunTimerDiv = () => {
    selectors.weatherTempSunTimerDiv = document.createElement('div');
    selectors.weatherTempSunTimerDiv.setAttribute('id', 'sun-stats');
    selectors.weatherSection.appendChild(selectors.weatherTempSunTimerDiv);
  };

  const createWeatherSunriseTimer = (data) => {
    selectors.weatherSunriseTimer = document.createElement('p');
    selectors.weatherSunriseTimer.setAttribute('id', 'sunrise');
    selectors.weatherSunriseTimer.appendChild(document.createTextNode(`Sunrise: ${unixToDate(data)}`));
    selectors.weatherTempSunTimerDiv.appendChild(selectors.weatherSunriseTimer);
  };

  const createWeatherSunsetTimer = (data) => {
    selectors.weatherSunsetTimer = document.createElement('p');
    selectors.weatherSunsetTimer.setAttribute('id', 'sunset');
    selectors.weatherSunsetTimer.appendChild(document.createTextNode(`Sunset: ${unixToDate(data)}`));
    selectors.weatherTempSunTimerDiv.appendChild(selectors.weatherSunsetTimer);
  };

  const storeWeatherSunTime = (data) => {
    createWeatherSunTimerDiv();
    createWeatherSunriseTimer(data.sys.sunrise + data.timezone);
    createWeatherSunsetTimer(data.sys.sunset + data.timezone);
    return data;
  };

  const createWeatherDataTime = (data) => {
    selectors.weatherDataTime = document.createElement('p');
    selectors.weatherDataTime.setAttribute('id', 'data-time');
    selectors.weatherDataTime.appendChild(document.createTextNode(`Updated at ${unixToDate(data)}`));
    selectors.weatherSection.appendChild(selectors.weatherDataTime);
  };

  const storeWeatherDataTime = (data) => {
    createWeatherDataTime(data.dt + data.timezone);
    return data;
  };

  const weatherAsyncOperations = (promise, tempSymbol = '℃') => promise
    .then(data => storeWeathertemp(data, tempSymbol))
    .then(data => storeWeatherDesc(data))
    .then(data => storeWeatherOtherStats(data, tempSymbol))
    .then(data => storeWeatherSunTime(data))
    .then(data => storeWeatherDataTime(data))
    .then(data => {
      document.addEventListener('click', (e) => {
        if (e.target) {
          if (e.target.id === 'celsius-button') {
            refreshTempStats();
            weatherAsyncOperations(weatherApi.apiCall(ipLookUpAsyncOperations(ipLookUp.apiCall)));
          } else if (e.target.id === 'fahrenheit-button') {
            refreshTempStats();
            weatherAsyncOperations(weatherApi.apiCall(ipLookUpAsyncOperations(ipLookUp.apiCall), 'imperial'), '℉');
          }
        }
      }, { once: true });
      return data;
    });

  const createSearchField = () => {
    selectors.searchField = document.createElement('input');
    selectors.searchField.setAttribute('type', 'text');
    selectors.searchField.placeholder = 'Enter a city...';
    selectors.contentSection.prepend(selectors.searchField);
  };

  const animateInput = (input) => {
    input.style.animation = 'input-animation 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
  };

  const createSearchFieldMacro = (e) => {
    e.preventDefault();
    if (e.target && e.target.id === 'search' && selectors.searchField === undefined) {
      createSearchField();
      animateInput(selectors.searchField);
    } else if (e.target && !(e.target.id === 'search' || e.target.tagName === 'INPUT') && selectors.searchField !== undefined) {
      selectors.searchField.remove();
      selectors.searchField = undefined;
    }
  };

  const validateInput = (input) => {
    if (!input.value) {
      input.placeholder = 'Please Fill this field';
      input.style.borderColor = 'red';
      return false;
    }
    return true;
  };

  const refreshPageContent = () => {
    selectors.weatherSection.textContent = '';
  };

  const searchLocationMacro = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      if (validateInput(e.target)) {
        refreshPageContent();
        // eslint-disable-next-line max-len
        selectors.locationHeader.textContent = e.target.value[0].toUpperCase() + e.target.value.slice(1);
        weatherAsyncOperations(weatherApi.apiCall(Promise.resolve({ city: e.target.value })));
        e.target.value = '';
      }
    }
  };

  const searchLocationEvent = () => {
    document.addEventListener('click', createSearchFieldMacro);
    document.addEventListener('keyup', searchLocationMacro);
  };

  const run = () => {
    createContentSection();
    createWeatherSection();
    createBackgroundDiv();
    weatherAsyncOperations(weatherApi.apiCall(ipLookUpAsyncOperations(ipLookUp.apiCall)));
    searchLocationEvent();
  };
  return {
    run,
  };
})();

export default dom;