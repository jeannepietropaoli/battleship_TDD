import FleetManager from '../fleetManager';

test('addShipToFleet method should push the new ship into the ships array attribute', () => {
  const fleetManager = new FleetManager();
  expect(fleetManager.ships.length).toBe(0);
  fleetManager.addAShipToFleet({});
  expect(fleetManager.ships).toEqual([{}]);
});
