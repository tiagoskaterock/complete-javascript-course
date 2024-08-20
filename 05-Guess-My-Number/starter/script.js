'use strict';

const checkBtn = document.querySelector(".check");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const maxNumber = 5;
var numberToGuess = generateNumber();
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const pointsLoseForMistake = 1;
const startingPoints = 3;
var scoreValue = startingPoints;
const againBtn = document.querySelector('.again');
const maxNumberElement = document.querySelector('.max-number')

function updateMaxNumberOnScreen() {
    maxNumberElement.innerHTML = maxNumber
}


function updatePointsOnScreen(){
    score.textContent = scoreValue;
}

function setMaxGuess() {
    guess.attributes.max.value = maxNumber;
}

function losePoint() {  
    errorSFX();  
    guess.value = "";
    scoreValue -= pointsLoseForMistake;
    updatePointsOnScreen();
    if(scoreValue < 1){        
        gameOver();
    }
}

function gameOver(){
    show_number_to_guess();
    scoreValue = 0;
    updatePointsOnScreen();
    message.textContent = "GAME OVER";
}

function generateNumber() {
    return Math.trunc(Math.random() * maxNumber + 1);
}

function backGroundVictory() {
    document.body.style.backgroundColor = "green";
}

function win() {
    show_number_to_guess();
    backGroundVictory();
    number.style.fontWeight = "bold";
    number.style.width = "30rem";
    message.textContent = "You guessed it!";
    checkBtn.computedStyleMap.display = "none";
    document.querySelector("#bg-song").pause();
    document.querySelector("#victory-song").play();
}

againBtn.addEventListener("click", function() {
    restart();
})

function restart() {
    numberToGuess = generateNumber();
    scoreValue = startingPoints
    score.textContent = scoreValue    
    document.body.style.backgroundColor = "#222";
    message.textContent = "Start guessing...";
    number.textContent = "?";
    number.style.size = "6rem";
    number.style.width = '15rem';   
    number.style.fontWeight = 'normal';
    guess.value = "";    
    document.querySelector("#bg-song").currentTime = 0;
    document.querySelector("#bg-song").play();
}

checkBtn.addEventListener("click", function() {
    if( ! guess.value) {
        message.textContent = "No guess";
    }
    else if(parseInt(guess.value) == numberToGuess) {
        win();
    }
    else if(parseInt(guess.value) > numberToGuess){
        message.textContent = "Your guess is to high";
        losePoint();
    }
    else if(guess.value < number){
        message.textContent = "Your guess is to low";
        losePoint();
    }
    
});

function show_number_to_guess() {
    number.textContent = numberToGuess;
}

function successSFX() {
    document.querySelector("#success-sfx").play();    
}

function errorSFX() {
    document.querySelector("#error-sfx").play();
}

document.querySelector("#bg-song").play();
updatePointsOnScreen();
setMaxGuess();
updateMaxNumberOnScreen();
