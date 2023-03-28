export default class GameboardRenderer {
  constructor(gameboard) {
    this.gameboard = gameboard;
    this.xMax = gameboard.xMax;
    this.yMax = gameboard.yMax;
    this.DOMGrid = document.createElement('div');
  }

  displaySquare(column, x, y) {
    const square = document.createElement('div');
    square.classList.add('square');
    column.appendChild(square);
    square.setAttribute('data-position', `[${x},${y}]`);
    return square;
  }

  displayColumn(columnNumber) {
    const column = document.createElement('div');
    column.classList.add(`column${columnNumber}`, 'column');
    this.DOMGrid.appendChild(column);
    return column;
  }

  displayGrid() {
    document.querySelector('body').appendChild(this.DOMGrid);
    this.DOMGrid.classList = 'grid';
    for (let y = 1; y <= this.yMax; y++) {
      const column = this.displayColumn(y);
      for (let x = 1; x <= this.xMax; x++) {
        this.displaySquare(column, x, y);
      }
    }
  }
}