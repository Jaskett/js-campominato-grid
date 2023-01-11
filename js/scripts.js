const playButton = document.querySelector('#btn-play');
const levelSelect = document.querySelector('#level');
const welcome = document.querySelector('.welcome');
const gridContainer = document.querySelector('.grid');
const guide = document.querySelector('#btn-guide');

playButton.addEventListener('click',
    function() {
        gridContainer.innerHTML = '';

        gridContainer.classList.remove('hidden');
        welcome.classList.add('hidden');

        const nCell = parseInt(levelSelect.value);
        const sideSquare = Math.sqrt(nCell);
        gridContainer.style.setProperty('--sideSquare', sideSquare);

        for(let i = 1; i <= nCell; i++) {
            const newCell = document.createElement('div');
            newCell.classList.add('cell');
            newCell.innerHTML = i;
            gridContainer.append(newCell);
        
            newCell.addEventListener('click',
                function() {
                    this.classList.toggle('active');
                }
            );
        }
    }
);