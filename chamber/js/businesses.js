const requestURL =
  "https://jhchan99.github.io/wdd230/chamber/data/directorydata.json";
const cards = document.querySelector(".spotlight");

const gridButton = document.querySelector("#grid");
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
  let name = document.createElement("h3");
  let portrait = document.createElement("img");

  // Change the textContent property of the h2 element to contain the directorys full name
  name.textContent = `${directory.name}`;

  // build the image attributes by using the setAtribute method for the src, alt, and loading attribute values
  portrait.setAttribute("src", directory.image);
  portrait.setAttribute("alt", `Portrait of ${directory.name}`);
  portrait.setAttribute("loading", "lazy");

  // Add/append the section(card) with the h2 element
  card.appendChild(name);
  card.appendChild(portrait);

  // add/append the existing HTML div with the cards class with the section card
  document.querySelector("#cards").appendChild(card);
}
