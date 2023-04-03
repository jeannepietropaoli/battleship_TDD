import FleetManager from '../fleetManager';
import Ship from '../ship';

test('addShipToFleet method should push the new ship into the ships array attribute', () => {
  const fleetManager = new FleetManager();
  expect(fleetManager.ships.length).toBe(0);
  fleetManager.addAShipToFleet({});
  expect(fleetManager.ships).toEqual([{}]);
});

test('removeShipFromFleet method should remove ship from the ships array attribute', () => {
  const fleetManager = new FleetManager();
  const ship1 = {};
  fleetManager.addAShipToFleet(ship1);
  expect(fleetManager.ships.length).toBe(1);
  fleetManager.removeShipFromFleet(ship1);
  expect(fleetManager.ships.length).toBe(0);
});

test('manageAttackOnShip method calls the hit method on the passed in ship', () => {
  const ship = new Ship([1, 1]);
  const fleetManager = new FleetManager();
  const hitMock = jest.fn();
  ship.hit = hitMock;
  fleetManager.manageAttackOnShip(ship);
  expect(hitMock).toHaveBeenCalledTimes(1);
});

test('manageAttackOnShip should call the removeShipFromFleet method if the passed in ship is sunk', () => {
  const ship = new Ship([
    [1, 1],
    [2, 1],
  ]);
  const fleetManager = new FleetManager();
  const removeShipFromFleetMock = jest.fn();
  fleetManager.removeShipFromFleet = removeShipFromFleetMock;
  fleetManager.manageAttackOnShip(ship); // first hit, 1 piece of the ship remaining
  expect(removeShipFromFleetMock).toHaveBeenCalledTimes(0);
  fleetManager.manageAttackOnShip(ship);
  expect(removeShipFromFleetMock).toHaveBeenCalledTimes(1);
});

test('allShipsSunk method should return true if all ships in the fleet are sunk', () => {
  const fleetManager = new FleetManager();
  expect(fleetManager.allShipsSunk()).toBe(true);
  fleetManager.addAShipToFleet(new Ship([1, 1]));
  expect(fleetManager.allShipsSunk()).toBe(false);
});
