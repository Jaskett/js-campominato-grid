const gridContainer = document.getElementById('grid-container');

for(let i = 0; i < 100; i++) {
    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    gridContainer.append(newCell);

    newCell.addEventListener('click',
        function() {
            this.classList.toggle('active');
        }
    );
}