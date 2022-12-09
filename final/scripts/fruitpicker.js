const requestURL =
    "https://brotherblazzard.github.io/canvas-content/fruit.json";

const populate = document.querySelectorAll('#fruit');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const directory = jsonObject;
        directory.forEach(populateSelector);
        directory.forEach(populateSelector1);
        directory.forEach(populateSelector2);
    });

function populateSelector(directory) {
    let fruit = document.createElement("option");

    //change value of option element to match fruit name
    fruit.value = `${directory.name}`;

    //change textContent to property of option element to contain the directorys fruit names
    fruit.textContent = `${directory.name}`;

    document.getElementById("fruit").appendChild(fruit);
}

function populateSelector1(directory) {
    let fruit = document.createElement("option");

    //change value of option element to match fruit name
    fruit.value = `${directory.name}`;

    //change textContent to property of option element to contain the directorys fruit names
    fruit.textContent = `${directory.name}`;

    document.getElementById("fruit1").appendChild(fruit);
}

function populateSelector2(directory) {
    let fruit = document.createElement("option");

    //change value of option element to match fruit name
    fruit.value = `${directory.name}`;

    //change textContent to property of option element to contain the directorys fruit names
    fruit.textContent = `${directory.name}`;

    document.getElementById("fruit2").appendChild(fruit);
}