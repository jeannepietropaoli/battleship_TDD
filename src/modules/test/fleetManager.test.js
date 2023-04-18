import FleetManager from '../fleetManager';
import Ship from '../ship';

test('instance of FleetManager should have a ships attribute which is an array of Ship instances', () => {
  const fleetManager = new FleetManager();
  expect(Array.isArray(fleetManager.ships)).toBe(true);
  fleetManager.ships.forEach((ship) => {
    expect(ship).toBeInstanceOf(Ship);
  });
});

test('allShipsSunk method should return true if all ships in the fleet are sunk', () => {
  const fleetManager = new FleetManager();
  fleetManager.ships = [];
  expect(fleetManager.allShipsSunk()).toBe(true);
  fleetManager.ships.push(new Ship(1, 'vertical', [1, 1]));
  expect(fleetManager.allShipsSunk()).toBe(false);
});

test('allShipsPlaced method should return true if all ships in the fleet are placed', () => {
  const fleetManager = new FleetManager();
  fleetManager.ships = [];
  expect(fleetManager.allShipsPlaced()).toBe(true);
  fleetManager.ships.push(new Ship(1, 'vertical', [1, 1]));
  expect(fleetManager.allShipsPlaced()).toBe(false);
});
