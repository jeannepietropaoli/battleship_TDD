import Square from './square';
import Ship from './ship';

const gameboardXMax = 10;

export default class Gameboard {
  constructor() {
    this.xMax = gameboardXMax;
    this.yMax = this.xMax;
    this.board = (() => {
      const board = [];
      for (let i = 0; i < this.xMax; i++) {
        const row = [];
        board.push(row);
        for (let j = 0; j < this.yMax; j++) {
          row.push(new Square(j, i));
        }
      }
      return board;
    })();
  }

  isPositionValid(position) {
    return position.every(
      (coordonates) =>
      this.isInsideGameboardLimits(coordonates) && this.isWater(coordonates)
    );
  }

  isInsideGameboardLimits(coordonates) {
    const [x, y] = coordonates;
    return x >= 0 && x < this.xMax && y >= 0 && y < this.yMax;
  }

  isWater(coordonates) {
    const [x, y] = coordonates;
    return this.board[x][y].shipReference === null;
  }

  turnWaterToShip(position, ship) {
    position.forEach((coordonates) => {
      const [x, y] = coordonates;
      this.board[x][y].shipReference = ship;
    });
  }

  placeShip(position) {
    if (this.isPositionValid(position)) {
      const ship = new Ship(position);
      this.turnWaterToShip(position, ship);
      return ship;
    }
    throw new Error('invalid coordonates');
  }
}