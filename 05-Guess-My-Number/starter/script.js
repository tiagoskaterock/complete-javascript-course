'use strict';

const checkBtn = document.querySelector(".check");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const maxNumber = 100;
const numberToGuess = generateNumber();
const number = document.querySelector(".number");
const score = document.querySelector(".score");
var scoreValue = parseInt(score.textContent);

function losePoint() {
    guess.value = "";
    scoreValue--;
    score.textContent = scoreValue;
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
