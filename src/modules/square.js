export default class Square {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.coordonates = [x, y];
    this.shipReference = null;
    this.attacked = false;
  }

  attack() {
    this.attacked = true;
  }

  isShip() {
    return this.shipReference !== null;
  }
}
