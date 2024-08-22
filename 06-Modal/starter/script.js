'use strict';

const modalElement = document.querySelector('.modal');

document.querySelector('.show-modal').addEventListener('click', function() {
    modalElement.classList.remove('hidden');
});
