'use strict';

const modalElement = document.querySelector('.modal');
const overlayElement = document.querySelector('.overlay');
const showModalElements = document.querySelectorAll('.show-modal');
const closeModalElement = document.querySelector('.close-modal');

for (let index = 0; index < showModalElements.length; index++) {
    console.log(showModalElements[index].textContent);
    showModalElements[index].addEventListener('click', function() {
        showModal();
        showOverlay();
    })
}

closeModalElement.addEventListener('click', function() {
    hideModal();
    hideOverlay();
});

function showModal() {
    modalElement.classList.remove('hidden');
}

function showOverlay() {
    overlayElement.classList.remove('hidden');
}

function hideModal() {
    modalElement.classList.add('hidden');
}

function hideOverlay() {
    overlayElement.classList.add('hidden');
}
