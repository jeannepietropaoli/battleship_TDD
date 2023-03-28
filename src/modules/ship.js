export default class Ship {
  constructor(position) {
    this.hits = 0;
    this.sunk = false;
    this.position = position; // array of coordonates pair representing the ship on the gameboard
    this.length = position.length;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    if (this.hits >= this.length) this.sunk = true;
    return this.sunk;
  }
}
