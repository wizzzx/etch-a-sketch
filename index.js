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
        sizeSelector.innerHTML = `
            <div class="modal">
                <h2 class="modal_header">Select a required size for the canvas. </h2>
                <p class="modal_subheader">Please take note that the overall size of the canvas will not change.</p>
                <div>
                    <button class="modal_button" id="size10">10x10</button>
                    <button class="modal_button" id="size20">20x20</button>
                    <button class="modal_button" id="size40">40x40</button>
                    <button class="modal_button" id="size80">80x80</button>
                </div>
            </div>
        `
        sizeSelector.setAttribute('class', 'size-selector')
        app.appendChild(sizeSelector);


        const button10 = document.querySelector('#size10');
        const button20 = document.querySelector('#size20');
        const button40 = document.querySelector('#size40');
        const button80 = document.querySelector('#size80');

        function createCanvas(amount, classname) {
            const newCanvas = document.createElement('div');
            newCanvas.setAttribute('class', 'div_container');

            newCanvas.style.gridTemplateColumns = `repeat(${amount}, 1fr)`;
            newCanvas.style.gridTemplateRows = `repeat(${amount}, 1fr)`;

            for (let i = 0; i < amount * amount; i++) {
                const newCanvasItem = document.createElement('div');
                newCanvasItem.setAttribute('class', 'canvas_item');
                newCanvasItem.classList.add(classname);
                newCanvas.appendChild(newCanvasItem);
            }

            app.appendChild(newCanvas);
        }

        button10.addEventListener('click', () => {
            createCanvas(10, 'canvas_item_10');
        })

        button20.addEventListener('click', () => {
            createCanvas(20, 'canvas_item_20');
        })

        button40.addEventListener('click', () => {
            createCanvas(40, 'canvas_item_40');
        })

        button80.addEventListener('click', () => {
            createCanvas(80, 'canvas_item_80');
        })
    })
})


