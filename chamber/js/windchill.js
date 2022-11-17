const currentTemp = document.querySelector("#current-temp");
const currentWind = document.querySelector("#wind-speed");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=64.8378&lon=-147.7164&appid=532c6642b652353eefe1bf815d1cc36a&units=Imperial";

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

apiFetch();

// function capitalizeFirstLetter(str) {
//   // converting first letter to uppercase
//   for (var i = 0; i < str.length; i++) {
//     const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

//     return capitalized;
//   }
// }

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    currentWind.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
    windChill

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc.toUpperCase();
}


const chill = document.querySelector('#wind-chill');
let tempValue = currentTemp.innerHTML;
let speedValue = currentWind.innerHTML;

function windChill(t, s) {
    let c = 'NA'
    if (t <= 50 && s > 3.0) {
        const r = Math.pow(s, .16);
        let x = 35.74 + (.6215 * t) - (35.75 * r) + (.4275 * t * r);
        c = Math.trunc(x)
    }
    return c;

}

chill.innerHTML = windChill(tempValue, speedValue);

