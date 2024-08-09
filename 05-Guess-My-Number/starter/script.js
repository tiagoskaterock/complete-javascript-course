'use strict';

/*
document.querySelector(".message").textContent = "Correct Number";

document.querySelector('.number').textContent = '69';

document.querySelector(".score").textContent = 11;

document.querySelector('.guess').value = 35;
*/

const checkBtn = document.querySelector(".check");
const guess = document.querySelector(".guess");

checkBtn.addEventListener("click", function() {
    alert(guess.value);
});
