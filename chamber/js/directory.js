const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json'
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject["prophets"];
        prophets.forEach(displayProphets);
    });






function displayProphets(prophet) {
    // create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let portrait = document.createElement('img');

    // Change the textContent property of the h2 element to contain the prophets full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    h3.textContent = `Born: ${prophet.birthdate}`;
    p.textContent = `Place of birth: ${prophet.birthplace}`

    // build the image attributes by using the setAtribute method for the src, alt, and loading attribute values.
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-Day President`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(h3)
    card.appendChild(p)
    card.appendChild(portrait);

    // add/append the existing HTML div with the cards class with the section card
    document.querySelector('div.cards').appendChild(card);
}
