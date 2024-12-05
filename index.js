'use strict';

document.addEventListener("DOMContentLoaded", function() {
    const app = document.getElementById('app')
    const head = document.getElementById('head')

    const button = document.createElement('button');
    button.textContent = 'Start';
    button.setAttribute('class', 'button')
    head.appendChild(button);

    button.addEventListener('click', () => {
        const sizeSelector = document.createElement('div')
        sizeSelector.setAttribute('class', 'size-selector')


    })
})


