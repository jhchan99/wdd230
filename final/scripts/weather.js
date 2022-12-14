const currentTemp = document.querySelector("#current-temp");
const currentWind = document.querySelector("#wind-speed");
const weatherIcon = document.querySelector("#weather-icon");
const currentHumidity = document.querySelector("#humidity");
const chill = document.querySelector('#wind-chill');
const captionDesc = document.querySelector("figcaption");

const tempTomorrow = document.querySelector("#tomorrow");
const tempDay2 = document.querySelector("#day2");
const tempDay3 = document.querySelector("#day3");

const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=46.2113&lon=-119.1372&appid=532c6642b652353eefe1bf815d1cc36a&units=Imperial";

const forecastURL =
    "https://api.openweathermap.org/data/2.5/forecast?lat=46.2113&lon=-119.1372&appid=532c6642b652353eefe1bf815d1cc36a&units=Imperial";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function apiFetchForecast() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayForecast1(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayForecast2(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayForecast3(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetchForecast();
apiFetch();

// function capitalizeFirstLetter(str) {
//   // converting first letter to uppercase
//   for (var i = 0; i < str.length; i++) {
//     const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

//     return capitalized;
//   }
// }

function displayResults(weatherData) {
    let temp = weatherData.main.temp;
    let speed = weatherData.wind.speed;
    let humidity = weatherData.main.humidity;

    currentTemp.innerHTML = `<strong>${temp.toFixed(0)}</strong>`;
    currentWind.innerHTML = `<strong>${speed.toFixed(0)}</strong>`;
    currentHumidity.innerHTML = `<strong>${humidity.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    captionDesc.textContent = desc;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);

    chill.innerHTML = windChill(temp, speed);

}



function windChill(t, s) {
    let c = 'N/A'
    if (t <= 50 && s > 3.0) {
        const r = Math.pow(s, .16);
        let x = 35.74 + (.6215 * t) - (35.75 * r) + (.4275 * t * r);
        c = `${Math.trunc(x)}&degF`
    }
    return c;

}


function displayForecast1(data) {
    let day = data.list[0].main.temp;
    tempTomorrow.innerHTML = `<strong>${day.toFixed(0)}</strong>`;
}

function displayForecast2(data) {
    let day2 = data.list[1].main.temp;
    tempDay2.innerHTML = `<strong>${day2.toFixed(0)}</strong>`;
}

function displayForecast3(data) {
    let day3 = data.list[2].main.temp;
    tempDay3.innerHTML = `<strong>${day3.toFixed(0)}</strong>`;
}








