export default class Ship {
  constructor(length, orientation, name) {
    this.hits = 0;
    this.position = []; // array of coordonates pair representing the ship on the gameboard
    this.length = length;
    this.orientation = orientation;
    this.name = name;
    this.color = '#344B07';
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    return this.hits >= this.length;
  }

  isPlaced() {
    return this.position.length > 0;
  }

  calculatePosition(start) {
    const [x, y] = start;
    const position = [];
    for (let i = 0; i < this.length; i++) {
      if (this.orientation === 'horizontal') {
        position.push([x + i, y]);
      } else {
        position.push([x, y + i]);
      }
    }
    return position;
  }

  setPosition(position) {
    this.position = position;
  }

  setOrientationRandomly() {
    const randomBinary = Math.round(Math.random());
    randomBinary === 0
      ? (this.orientation = 'horizontal')
      : (this.orientation = 'vertical');
  }
}
