document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById('app');
    const head = document.getElementById('head');

    const button = document.createElement('button');
    button.textContent = 'Start';
    button.setAttribute('class', 'button');
    head.appendChild(button);

    button.addEventListener('click', () => {
        const sizeSelector = document.createElement('div');
        sizeSelector.innerHTML = `
            <div class="modal">
                <h2 class="modal_header">Select a required size for the canvas. </h2>
                <p class="modal_subheader">Please take note that the overall size of the canvas will not change.</p>
                <div class="modal_button_container">
                    <button class="modal_button" id="size10">10x10</button>
                    <button class="modal_button" id="size20">20x20</button>
                    <button class="modal_button" id="size40">40x40</button>
                    <button class="modal_button" id="size80">80x80</button>
                </div>
            </div>
        `;
        sizeSelector.setAttribute('class', 'size-selector');
        app.appendChild(sizeSelector);

        const button10 = document.querySelector('#size10');
        const button20 = document.querySelector('#size20');
        const button40 = document.querySelector('#size40');
        const button80 = document.querySelector('#size80');

        let isDrawing = false;

        function createCanvas(amount) {
            const existingCanvas = document.querySelector('.div_container');
            if (existingCanvas) {
                existingCanvas.remove();
            }

            const newCanvas = document.createElement('div');
            newCanvas.setAttribute('class', 'div_container');
            newCanvas.style.display = 'grid';
            newCanvas.style.gridTemplateColumns = `repeat(${amount}, 1fr)`;
            newCanvas.style.gridTemplateRows = `repeat(${amount}, 1fr)`;

            for (let i = 0; i < amount * amount; i++) {
                const newCanvasItem = document.createElement('div');
                newCanvasItem.setAttribute('class', 'canvas_item');
                newCanvasItem.setAttribute('data-opacity', '0');
                newCanvasItem.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                newCanvas.appendChild(newCanvasItem);
            }

            app.appendChild(newCanvas);

            const canvasItems = newCanvas.querySelectorAll('.canvas_item');

            newCanvas.addEventListener('mousedown', () => (isDrawing = true));
            newCanvas.addEventListener('mouseup', () => (isDrawing = false));
            newCanvas.addEventListener('mouseleave', () => (isDrawing = false));

            newCanvas.addEventListener('touchstart', () => (isDrawing = true));
            newCanvas.addEventListener('touchend', () => (isDrawing = false));
            newCanvas.addEventListener('touchcancel', () => (isDrawing = false));

            canvasItems.forEach((item) => {
                item.addEventListener('mouseover', () => {
                    if (!isDrawing) return;
                    paintItem(item);
                });

                item.addEventListener('touchmove', (e) => {
                    e.preventDefault();
                    const touch = e.touches[0];
                    const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
                    if (targetElement && targetElement.classList.contains('canvas_item')) {
                        paintItem(targetElement);
                    }
                });
            });
        }

        function paintItem(item) {
            let currentOpacity = parseFloat(item.getAttribute('data-opacity'));
            if (currentOpacity < 1) {
                currentOpacity += 0.1;
                item.setAttribute('data-opacity', currentOpacity.toFixed(1));
                item.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
            }
        }

        button10.addEventListener('click', () => {
            createCanvas(10);
            sizeSelector.remove();
        });
        button20.addEventListener('click', () => {
            createCanvas(20);
            sizeSelector.remove();
        });
        button40.addEventListener('click', () => {
            createCanvas(40);
            sizeSelector.remove();
        });
        button80.addEventListener('click', () => {
            createCanvas(80);
            sizeSelector.remove();
        });
    });
});
