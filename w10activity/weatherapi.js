const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
<<<<<<< HEAD
  "{https://api.openweathermap.org/data/3.0/onecall?q=Fairbanks&units=imperial&appid=532c6642b652353eefe1bf815d1cc36a}";
=======
  "https://api.openweathermap.org/data/2.5/weather?lat=64.8378&lon=-147.7164&appid=532c6642b652353eefe1bf815d1cc36a";
>>>>>>> 078cfea4c22ce64254e980730afef2d57c2d07a3

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      // displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();