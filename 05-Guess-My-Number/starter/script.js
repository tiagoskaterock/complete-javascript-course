'use strict';

const checkBtn = document.querySelector(".check");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const maxNumber = 10;
const numberToGuess = generateNumber();
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const pointsLoseForMistake = 1;
const startingPoints = 3;
var scoreValue = startingPoints;

updatePointsOnScreen();
setMaxGuess();

function updatePointsOnScreen(){
    score.textContent = scoreValue;
}

function setMaxGuess() {
    guess.attributes.max.value = maxNumber;
}

function losePoint() {    
    guess.value = "";
    scoreValue -= pointsLoseForMistake;
    updatePointsOnScreen();
    if(scoreValue < 1){        
        gameOver();
    }
}

function gameOver(){
    scoreValue = 0;
    updatePointsOnScreen();
    message.textContent = "GAME OVER";
}

function generateNumber() {
    return Math.trunc(Math.random() * maxNumber + 1);
}

checkBtn.addEventListener("click", function() {
    if( ! guess.value) {
        message.textContent = "No guess";
    }
    else if(parseInt(guess.value) == numberToGuess) {
        message.textContent = "You guessed it!";
        checkBtn.computedStyleMap.display = "none";
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
