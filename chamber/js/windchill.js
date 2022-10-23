const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function() {

    if (input.value.length === 0) {
        console.log(alert.setAttribute("placeholder", "Please select a chapter"));
    }

    else {

    let myItem = input.value;

        const listText = document.createElement('span');
        const listBtn  = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = "Remove Content";
    
        list.appendChild(listItem);

    input.value = "";

    listBtn.addEventListener('click', function () {
        list.removeChild(listItem);
    });

    };

    input.focus();

});