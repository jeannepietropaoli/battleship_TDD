export default class FleetManager {
  constructor() {
    this.ships = [];
  }

  addAShipToFleet(newShip) {
    this.ships.push(newShip);
  }

  removeShipFromFleet(ship) {
    const index = this.ships.indexOf(ship);
    this.ships.splice(index, 1);
  }

  manageAttackOnShip(attackedShip) {
    attackedShip.hit();
    if (attackedShip.isSunk()) this.removeShipFromFleet(attackedShip);
  }

  empty() {
    return this.ships.length === 0;
  }
}
