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
        directory.forEach(populateSelector1);
        directory.forEach(populateSelector2);
        directory.forEach(populateSelector3);
    });

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

function populateSelector3(directory) {
    let fruit = document.createElement("option");

    //change value of option element to match fruit name
    fruit.value = `${directory.name}`;

    //change textContent to property of option element to contain the directorys fruit names
    fruit.textContent = `${directory.name}`;

    document.getElementById("fruit3").appendChild(fruit);
}


function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    console.log({ value });

    createTable(value);
}



const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit, createTable);


function createTable(values) {
    // create table elements to add to document
    let row = document.createElement("tr");
    let name = document.createElement("td");
    let fruit1 = document.createElement("td");
    let fruit2 = document.createElement("td");
    let fruit3 = document.createElement("td");
    let info = document.createElement("td");
    let carbs = document.createElement("td");

    name.textContent = `${values.fname}`;
    fruit1.textContent = `${values.fruit1}`;
    fruit2.textContent = `${values.fruit2}`;
    fruit3.textContent = `${values.fruit3}`;
    info.textContent = `${values.extrainfo}`

    row.appendChild(name);
    row.appendChild(fruit1);
    row.appendChild(fruit2);
    row.appendChild(fruit3);
    row.appendChild(info);

    document.querySelector("#information").appendChild(row);

}