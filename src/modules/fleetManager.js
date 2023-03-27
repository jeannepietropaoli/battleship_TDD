export default class FleetManager {
  constructor() {
    this.ships = [];
  }

  addAShipToFleet(newShip) {
    this.ships.push(newShip);
  }
}
