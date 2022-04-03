// global variables
let searchFormEl = document.querySelector('#search-form')
let APIKey = '6499ed5b55d7a058ff755eea3f3cf740'
let city;

// let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

// user search city gets city info from weather API
function searchFormSubmit(event) {
    event.preventDefault();

    let searchInputVal = document.querySelector('#search-input').value;

    if (!searchInputVal) {
        return;
    }

    let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + searchInputVal + "&appid=" + APIKey;
    location.assign(queryURL)
}

searchFormEl.addEventListener('submit', searchFormSubmit);

//get search parameters from URL and convert to array
function getWeather() {
    let getWeatherArray = document.location.search.split('')

//get format values
let query = getWeatherArray[0].split('').pop();
let format = getWeatherArray[1].split('').pop();

searchAPI(query, format);

}

//different query parameters to accept user input, create variables that can hold input after the user has submitted it
function showResults(resultObject) {
    console.log(resultObject);
    let resultCard = document.createElement('div');
    resultCard.Card.classList.add('card', 'mb-3', 'p-4');

    let resultBody = document.createElement('div');
    resultBody.classList.add('card-body');
    resultCard.append(resultBody);

    let titleH = document.createElement('h3');
    titleH.textContent = resultObject.title;

    let bodyEl = document.createElement('p');
    bodyEl.innerHTML = '<strong>Date:</strong>' + resultObject.date + '<br/>';

    if (resultObject.weather) {
        bodyEl.innerHTML += '<strong>Weather:</strong>' + resultObject.weather.join(', ') + '<br/>';
    } else {
        bodyEl.innerHTML += '<strong>Weather:</strong> No weather for this entry.';
    }
    
    if (resultObject.main) {
        bodyEl.innerHTML += '<strong>Main:</strong>' + resultObject.main.join(', ') + '<br/>'
    } else {
        bodyEl.innerHTML += '<strong>Main:</strong> No information for this entry.';
    }

    if (resultObject.wind) {
        bodyEl.innerHTML += '<strong>Wind:</strong>' + resultObject.wind.join(', ') + '<br/>'
    } else {
        bodyEl.innerHTML += '<strong>Wind:</strong> No information for this entry.';
    }

    if (resultObject.sys) {
        bodyEl.innerHTML += '<strong>UV Index:</strong>' + resultObject.sys + '<br/>'
    } else {
        bodyEl.innerHTML += '<strong>UV Index:</strong> No information for this entry.';
    }
}

// fetch(queryURL)