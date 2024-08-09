'use strict';

/*
document.querySelector(".message").textContent = "Correct Number";

document.querySelector('.number').textContent = '69';

document.querySelector(".score").textContent = 11;

document.querySelector('.guess').value = 35;
*/

const checkBtn = document.querySelector(".check");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");

checkBtn.addEventListener("click", function() {
    if( ! guess.value) {
        message.textContent = "No guess";
    }
    else {
        message.textContent = "Your guess is " + guess.value;
    }
});
