const requestURL =
  "https://jhchan99.github.io/wdd230/chamber/data/directorydata.json";
const cards = document.querySelector(".spotlight");

const gridButton = document.querySelector("#grid");
const display = document.querySelector("#cards");

function getSpot(gold, x) {
  const min = 0;
  const max = gold.length - 1;
  let spotlights = [];
  let i = 0;
  do {
    let n = Math.floor(Math.random() * (max - min + 1) + min);
    if (!spotlights.includes(n)) {
      spotlights.push(n);
      i++;
    }
  } while (i < x);
  return spotlights;
}

if (document.querySelector('.spotlight')) {
  let spotlight = 'spotlight';
  fetch(requestURL)
    .then(response => response.json())
    .then(json => {
      const members = json['directory'];
      console.log(members);
      const gold = members.filter(x => x.membership >= 2);
      console.log(gold);
      const spotsToFill = Math.min(gold.length, 3);
      if (spotsToFill > 0) {
        let spotlights = getSpot(gold, spotsToFill);
        console.log(spotlights);
        for (let i = 0; i < spotlights.length; i++) {
          let mySpot = 'spot' + (i + 1);
          displayDirectory(gold[spotlights[i]], mySpot);
        }
      }
    })
}

function displayDirectory(directory, spot) {
  // create elements to add to the document
  let card = document.createElement("section");
  let name = document.createElement("h3");
  let website = document.createElement("p");
  let portrait = document.createElement("img");
  // Change the textContent property of the h2 element to contain the directorys full name
  name.textContent = `${directory.name}`;
  website.textContent = `${directory.website}`;
  // build the image attributes by using the setAtribute method for the src, alt, and loading attribute values
  portrait.setAttribute("src", directory.image);
  portrait.setAttribute("alt", `Portrait of ${directory.name}`);
  portrait.setAttribute("loading", "lazy");

  // Add/append the section(card) with the h2 element
  card.appendChild(name);
  card.appendChild(portrait);
  card.appendChild(website);

  // add/append the existing HTML div with the cards class with the section card
  document.querySelector("#cards").appendChild(card);
}
