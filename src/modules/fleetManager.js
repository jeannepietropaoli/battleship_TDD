import Ship from './ship';

export default class FleetManager {
  constructor() {
    this.ships = [
      new Ship(1, 'horizontal', 'ship1'),
      new Ship(2, 'horizontal', 'ship2'),
      new Ship(3, 'vertical', 'ship3'),
      new Ship(4, 'vertical', 'ship4'),
      new Ship(2, 'vertical', 'ship5'),
    ];
  }

  allShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }

  allShipsPlaced() {
    return this.ships.every((ship) => ship.isPlaced());
  }
}
