import Square from './square';
import FleetManager from './fleetManager';

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
    this.fleetManager = new FleetManager();
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

  placeShip(ship, start) {
    const position = ship.calculatePosition(start);
    if (this.isPositionValid(position)) {
      ship.setPosition(position);
      this.turnWaterToShip(ship.position, ship);
    }
    return ship;
  }

  placeShipsRandomly() {
    const { ships } = this.fleetManager;
    ships.forEach((ship) => {
      while (!ship.isPlaced()) {
        const start = [
          Math.floor(Math.random() * this.xMax),
          Math.floor(Math.random() * this.yMax),
        ];
        ship.setOrientationRandomly();
        this.placeShip(ship, start);
      }
    });
  }

  receiveAttack(coordonates) {
    const [x, y] = coordonates;
    const targetSquare = this.board[x][y];
    if (!targetSquare.attacked) {
      targetSquare.attack();
      if (!this.isWater(coordonates)) {
        const ship = targetSquare.shipReference;
        ship.hit();
        return 'hit';
      }
      return 'missed';
    }
    return 'already attacked square';
  }
}
