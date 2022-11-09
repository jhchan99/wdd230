const requestURL = 'https://jhchan99.github.io/wdd230/chamber/data/directorydata.json'
const cards = document.querySelector('.cards');

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
    let card = document.createElement('section');
    let h2 = document.createElement('h2');

    // Change the textContent property of the h2 element to contain the directorys full name
    h2.textContent = `${directory.name}`;

    // build the image attributes by using the setAtribute method for the src, alt, and loading attribute values.


    // Add/append the section(card) with the h2 element
    card.appendChild(h2);

    // add/append the existing HTML div with the cards class with the section card
    document.querySelector('div.cards').appendChild(card);
}
