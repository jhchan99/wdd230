const requestURL =
    "https://brotherblazzard.github.io/canvas-content/fruit.json";

document.querySelector("#dateStamp").value = new Date();
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

    const fruitname = value.fruit1


    function getNutrition(fruits, name) {

        return fruits.name === name;


    }

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject);
            const directory = jsonObject;
            console.log(directory.find(getNutrition(fruitname)));
        });
}



const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit, createTable, clickbutton);


function createTable(values) {
    // create table elements to add to document
    let row = document.createElement("tr");
    let name = document.createElement("td");
    let fruit1 = document.createElement("td");
    let fruit2 = document.createElement("td");
    let fruit3 = document.createElement("td");
    let info = document.createElement("td");
    let date = document.createElement("td")
    let carbs = document.createElement("td");

    name.textContent = `${values.fname}`;
    fruit1.textContent = `${values.fruit1}`;
    fruit2.textContent = `${values.fruit2}`;
    fruit3.textContent = `${values.fruit3}`;
    info.textContent = `${values.extrainfo}`;
    date.textContent = `${values.formDate}`;

    row.appendChild(name);
    row.appendChild(fruit1);
    row.appendChild(fruit2);
    row.appendChild(fruit3);
    row.appendChild(info);
    row.appendChild(date);

    document.querySelector("#information").appendChild(row);
}


// save counter element to a variable:
var counterElement = document.getElementById('drinkcount');

// fetch drinkcount from localStorage
var drinkcount = localStorage.getItem('drinkcount');

// in case there is no value already in localStorage:
if (!drinkcount) { drinkcount = 0; }

// update the dom with the vale fetched from storage:
counterElement.innerText = drinkcount * 5;

// save drinkcount to localStorage whenever document is clicked
var buttonClick = function (event) {
    localStorage.setItem('drinkcount', drinkcount);
    console.log(drinkcount)
};

document.onclick = buttonClick;

// handle button clicks:
function clickbutton() {
    drinkcount++;
    counterElement.innerHTML = drinkcount * 5;
    console.log(drinkcount)
}
