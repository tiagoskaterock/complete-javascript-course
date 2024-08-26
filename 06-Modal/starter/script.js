'use strict';

const modalElement = document.querySelector('.modal');
const overlayElement = document.querySelector('.overlay');
const showModalElements = document.querySelectorAll('.show-modal');
const closeModalElement = document.querySelector('.close-modal');

for (let index = 0; index < showModalElements.length; index++) {
    console.log(showModalElements[index].textContent);
    showModalElements[index].addEventListener('click', showModal)
}

closeModalElement.addEventListener('click', hideModal);

overlayElement.addEventListener('click', hideModal);

function showModal() {
    modalElement.classList.remove('hidden');
    showOverlay();
}

function hideModal() {
    modalElement.classList.add('hidden');
    hideOverlay();
}

function showOverlay() {
    overlayElement.classList.remove('hidden');
}

function hideOverlay() {
    overlayElement.classList.add('hidden');
}
