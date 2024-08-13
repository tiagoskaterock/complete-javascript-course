'use strict';

const checkBtn = document.querySelector(".check");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const maxNumber = 10;
const numberToGuess = generateNumber();
const number = document.querySelector(".number");

function generateNumber() {
    return Math.trunc(Math.random() * maxNumber + 1);
}

checkBtn.addEventListener("click", function() {
    if( ! guess.value) {
        message.textContent = "No guess";
    }
    else {
        message.textContent = "Your guess is " + guess.value;
    }
});

number.textContent = numberToGuess;
