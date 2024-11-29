document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    const button = document.createElement('button');
    button.textContent = 'Generate a grid'
    button.setAttribute('class', 'button')
    app.appendChild(button);

    button.addEventListener('click', () => {
        function generateGrid(amount) {
            for (let i = 0; i < amount; i++) {
                const gridPiece = document.createElement('div');
                gridPiece.classList.add('grid-piece');
                
            }
        }
    })
})


