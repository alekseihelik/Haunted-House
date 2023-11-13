let misc1 = document.getElementById('misc1');
let misc2 = document.getElementById('misc2');
let misc3 = document.getElementById('misc3');
let misc4 = document.getElementById('misc4');
let kitchen = document.getElementById('kitchenImportant');
let kitchenText = document.getElementById('kitchenText')
let bathroom = document.getElementById('bathroomImportant');
let bathroomText = document.getElementById('bathroomText');
let hasKnife = false;
let foundFirst = false;
let foundSecond = false;
let foundThird = false;
let foundFourth = false;
var digit1, digit2, digit3, digit4;

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('index.html')) {
        localStorage.removeItem('randomNumber');
        foundFirst, foundSecond, foundThird, foundFourth = false;
    }
    let randomNumber = localStorage.getItem('randomNumber');
    if (!randomNumber) {
        randomNumber = generateRandomNumber();
        localStorage.setItem('randomNumber', randomNumber);
    }
    let randomNumberString = randomNumber.toString();
    digit1 = parseInt(randomNumberString[0]);
    digit2 = parseInt(randomNumberString[1]);
    digit3 = parseInt(randomNumberString[2]);
    digit4 = parseInt(randomNumberString[3]);
});

function generateRandomNumber() {
    return Math.floor(Math.random() * 9000) + 1000;
}

function startGame(){
    window.location.href = 'livingRoom.html';
}


function openPopUp() {
    let url = "help.html";
    let height = 300;
    let width = 500;
    var left = ( screen.width - width ) / 2;
    var top = ( screen.height - height+200 ) / 2;
    var newWindow = window.open( url, "center window", 'resizable = yes, width=' + width + ', height=' + height + ', top='+ top + ', left=' + left);
}

if(window.location.pathname.endsWith('firstBathroom.html')){
    misc1.addEventListener('click',function(){
        bathroomText.textContent = 'The bathtub is empty, except for a few roaches crawling around.';
    })
    
    misc2.addEventListener('click',function(){
        bathroomText.textContent = 'There is nothing in the toilet...';
    })
    
    bathroom.addEventListener('click',function(){
        let string = "You find a paper slip that says: #1 - " + digit1;
        bathroomText.textContent = string;
        foundFirst = true; 
    })
}

if(window.location.pathname.endsWith('kitchen.html')){
    misc3.addEventListener('click',function(){
        kitchenText.textContent = 'This cabinet is locked.';
    })
    
    misc4.addEventListener('click',function(){
        kitchenText.textContent = 'You find a knife.';
        hasKnife = true;
    })
    
    kitchen.addEventListener('click',function(){
        let string = "You find a paper slip that says: #2 - " + digit2;
        kitchenText.textContent = string;
        foundSecond = true;
    })
}
