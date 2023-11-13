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
        sessionStorage.removeItem('randomNumber');
        sessionStorage.removeItem('hasKnife');
        sessionStorage.removeItem('hasKey');
        sessionStorage.removeItem('foundFirst');
        sessionStorage.removeItem('foundSecond');
        sessionStorage.removeItem('foundThird');
        sessionStorage.removeItem('foundFourth');
        foundFirst, foundSecond, foundThird, foundFourth = false;
    }
    let randomNumber = sessionStorage.getItem('randomNumber');
    if (!randomNumber) {
        randomNumber = generateRandomNumber();
        sessionStorage.setItem('randomNumber', randomNumber);
    }
    let randomNumberString = randomNumber.toString();
    digit1 = parseInt(randomNumberString[0]);
    digit2 = parseInt(randomNumberString[1]);
    digit3 = parseInt(randomNumberString[2]);
    digit4 = parseInt(randomNumberString[3]);

    hasKnife = JSON.parse(sessionStorage.getItem('hasKnife')) || false;
    hasKey = JSON.parse(sessionStorage.getItem('hasKey')) || false;
    foundFirst = JSON.parse(sessionStorage.getItem('foundFirst')) || false;
    foundSecond = JSON.parse(sessionStorage.getItem('foundSecond')) || false;
    foundThird = JSON.parse(sessionStorage.getItem('foundThird')) || false;
    foundFourth = JSON.parse(sessionStorage.getItem('foundFourth')) || false;
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
        sessionStorage.setItem('foundFirst', JSON.stringify(foundFirst));
    })
}

if (window.location.pathname.endsWith('kitchen.html')) {
    misc3.addEventListener('click', function () {
        kitchenText.textContent = 'This cabinet is locked.';
    })

    misc4.addEventListener('click', function () {
        kitchenText.textContent = 'You find a knife.';
        hasKnife = true;
        sessionStorage.setItem('hasKnife', JSON.stringify(hasKnife));
    })

    kitchen.addEventListener('click', function () {
        let string = "You find a paper slip that says: #2 - " + digit2;
        kitchenText.textContent = string;
        foundSecond = true;
        sessionStorage.setItem('foundSecond', JSON.stringify(foundSecond));
    })
}

if (window.location.pathname.endsWith('kidBedroom.html')) {
    kid1.addEventListener('click', function () {
        if (foundFirst && foundSecond && foundThird && foundFourth) {
            kidText.textContent = 'You insert the four-digit combination and the trap door clicks open. You crawl into the trapdoor, and through a tunnel.';
            setTimeout(function () {
                window.location.href = 'victory.html';
            }, 5000);
        }
        else {
            kidText.textContent = 'There is a trap door under the bed, locked by a 4-digit combination lock. Maybe the numbers are somewhere else.';
        }
    })

    kid2.addEventListener('click', function () {
        if (hasKey) {
            let string = "You insert the key, and the toy chest clicks open. You find a paper slip that says: #4 - " + digit4;
            kidText.textContent = string;
            foundFourth = true;
            sessionStorage.setItem('foundFourth', JSON.stringify(foundFourth));
        }
        else {
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
            sessionStorage.setItem('foundThird', JSON.stringify(foundThird));
            sessionStorage.setItem('hasKey', JSON.stringify(hasKey));
        }
        else if (hasKnife === false) {
            atticText.textContent = 'There is a rope around the box, not letting you open it.';
        }
    })
}
