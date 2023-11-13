let misc1 = document.getElementById('misc1');
let misc2 = document.getElementById('misc2');
let misc3 = document.getElementById('misc3');
let misc4 = document.getElementById('misc4');
let kid1 = document.getElementById('kidBed');
let kid2 = document.getElementById('kidToy');
let attic = document.getElementById('atticImportant');
let atticText = document.getElementById('atticText');
let kidText = document.getElementById('kidText')
let kitchen = document.getElementById('kitchenImportant');
let kitchenText = document.getElementById('kitchenText')
let bathroom = document.getElementById('bathroomImportant');
let bathroomText = document.getElementById('bathroomText');
let hasKnife = false;
let hasKey = false;
let foundFirst = false;
let foundSecond = false;
let foundThird = false;
let foundFourth = false;
var digit1, digit2, digit3, digit4;

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.endsWith('index.html')) {
        clearStorage();
        foundFirst, foundSecond, foundThird, foundFourth = false;
    }

    let randomNumber = getSessionStorageItem('randomNumber');
    if (!randomNumber) {
        randomNumber = generateRandomNumber();
        setSessionStorageItem('randomNumber', randomNumber);
    }

    let randomNumberString = randomNumber.toString();
    digit1 = parseInt(randomNumberString[0]);
    digit2 = parseInt(randomNumberString[1]);
    digit3 = parseInt(randomNumberString[2]);
    digit4 = parseInt(randomNumberString[3]);

    hasKnife = JSON.parse(getSessionStorageItem('hasKnife')) || false;
    hasKey = JSON.parse(getSessionStorageItem('hasKey')) || false;
    foundFirst = JSON.parse(getSessionStorageItem('foundFirst')) || false;
    foundSecond = JSON.parse(getSessionStorageItem('foundSecond')) || false;
    foundThird = JSON.parse(getSessionStorageItem('foundThird')) || false;
    foundFourth = JSON.parse(getSessionStorageItem('foundFourth')) || false;
});

function generateRandomNumber() {
    return Math.floor(Math.random() * 9000) + 1000;
}

function startGame() {
    window.location.href = 'livingRoom.html';
}

function openPopUp() {
    let url = "help.html";
    let height = 300;
    let width = 500;
    var left = (screen.width - width) / 2;
    var top = (screen.height - height + 200) / 2;
    var newWindow = window.open(url, "center window", 'resizable = yes, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
}

if (window.location.pathname.endsWith('firstBathroom.html')) {
    misc1.addEventListener('click', function () {
        bathroomText.textContent = 'The bathtub is empty, except for a few roaches crawling around.';
    })

    misc2.addEventListener('click', function () {
        bathroomText.textContent = 'There is nothing in the toilet...';
    })

    bathroom.addEventListener('click', function () {
        let string = "You find a paper slip that says: #1 - " + digit1;
        bathroomText.textContent = string;
        foundFirst = true;
        setSessionStorageItem('foundFirst', foundFirst);
    })
}

if (window.location.pathname.endsWith('kitchen.html')) {
    misc3.addEventListener('click', function () {
        kitchenText.textContent = 'This cabinet is locked.';
    })

    misc4.addEventListener('click', function () {
        kitchenText.textContent = 'You find a knife.';
        hasKnife = true;
        setSessionStorageItem('hasKnife', hasKnife);
    })

    kitchen.addEventListener('click', function () {
        let string = "You find a paper slip that says: #2 - " + digit2;
        kitchenText.textContent = string;
        foundSecond = true;
        setSessionStorageItem('foundSecond', foundSecond);
    })
}

if (window.location.pathname.endsWith('kidBedroom.html')) {
    kid1.addEventListener('click', function () {
        if (foundFirst && foundSecond && foundThird && foundFourth) {
            kidText.textContent = 'You insert the four-digit combination and the trap door clicks open. You crawl into the trapdoor, and through a tunnel.';
            setTimeout(function () {
                window.location.href = 'victory.html';
            }, 5000);
        } else {
            kidText.textContent = 'There is a trap door under the bed, locked by a 4-digit combination lock. Maybe the numbers are somewhere else.';
        }
    })

    kid2.addEventListener('click', function () {
        if (hasKey) {
            let string = "You insert the key, and the toy chest clicks open. You find a paper slip that says: #4 - " + digit4;
            kidText.textContent = string;
            foundFourth = true;
            setSessionStorageItem('foundFourth', foundFourth);
        } else {
            kidText.textContent = 'The toy chest is locked. Maybe there is a key somewhere.';
        }
    })
}

if (window.location.pathname.endsWith('attic.html')) {
    attic.addEventListener('click', function () {
        if (hasKnife === true) {
            hasKey = true;
            let string = "You cut the rope that was tied around the box and open it. You found a key. Next to it is a paper slip that says: #3 - " + digit3;
            atticText.textContent = string;
            foundThird = true;
            setSessionStorageItem('foundThird', foundThird);
            setSessionStorageItem('hasKey', hasKey);
        } else if (hasKnife === false) {
            atticText.textContent = 'There is a rope around the box, not letting you open it.';
        }
    })
}

function getSessionStorageItem(key) {
    return sessionStorage.getItem(key);
}

function setSessionStorageItem(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

function clearStorage() {
    sessionStorage.removeItem('randomNumber');
    sessionStorage.removeItem('hasKnife');
    sessionStorage.removeItem('hasKey');
    sessionStorage.removeItem('foundFirst');
    sessionStorage.removeItem('foundSecond');
    sessionStorage.removeItem('foundThird');
    sessionStorage.removeItem('foundFourth');
}
