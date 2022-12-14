const requestURL =
  "https://jhchan99.github.io/wdd230/chamber/data/directorydata.json";
const cards = document.querySelector(".grid");

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("#cards");


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const directory = jsonObject["directory"];
    directory.forEach(displayDirectory);
  });

function displayDirectory(directory) {
  // create elements to add to the document
  let card = document.createElement("section");
  let name = document.createElement("h2");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let website = document.createElement("p");
  let portrait = document.createElement("img");

  // Change the textContent property of the h2 element to contain the directorys full name
  name.textContent = `${directory.name}`;
  address.textContent = `${directory.Address}`;
  phone.textContent = `${directory.Phone}`;
  website.textContent = `${directory.website}`;

  // build the image attributes by using the setAtribute method for the src, alt, and loading attribute values
  portrait.setAttribute("src", directory.image);
  portrait.setAttribute("alt", `Portrait of ${directory.name}`);
  portrait.setAttribute("loading", "lazy");

  // Add/append the section(card) with the h2 element
  card.appendChild(name);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(website);
  card.appendChild(portrait);

  // add/append the existing HTML div with the cards class with the section card
  document.querySelector("#cards").appendChild(card);
}

listButton.addEventListener("click", showList);
gridButton.addEventListener("click", showGrid);

function showGrid() {
  display.classList.add("grid");
  display.classList.remove("list");
}

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}