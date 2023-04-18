import FleetManager from '../fleetManager';
import Gameboard from '../gameboard';
import Ship from '../ship';

test('Gameboard class correctly instantiate a 10 x 10 battleship gameboard', () => {
  const gameboard = new Gameboard();
  expect(gameboard.board.length).toBe(10);
  expect(gameboard.board[0].length).toBe(10);
});

test('Gameboard class correctly creates a fleetManager for each new Gameboard instance', () => {
  const gameboard = new Gameboard();
  expect(gameboard.fleetManager).toBeInstanceOf(FleetManager);
});

test('Gameboard instance correctly creates a board object with the right coordonates for each square', () => {
  const gameboard = new Gameboard();
  expect(gameboard.board[0][0].coordonates).toEqual([0, 0]);
  expect(
    gameboard.board[gameboard.xMax - 1][gameboard.yMax - 1].coordonates
  ).toEqual([9, 9]);
  expect(gameboard.board[0][4].coordonates).toEqual([4, 0]);
});

test('placeShip method should return the ship passed as argument', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(2, 'horizontal', 'ship');
  expect(gameboard.placeShip(ship, [2, 2])).toEqual(ship);
});

test('placeShip method should call the calculatePosition method on the ship passed as argument with the start coordonates passed as arguments', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(2, 'horizontal', 'ship');
  const calculatePositionSpy = jest.spyOn(ship, 'calculatePosition');
  gameboard.placeShip(ship, [2, 2]);
  expect(calculatePositionSpy).toHaveBeenCalledTimes(1);
  expect(calculatePositionSpy).toHaveBeenCalledWith([2, 2]);
});

test('placeShip method should call the setPosition method with the ship passed as argument if position of the ship is valid', () => {
  const gameboard = new Gameboard();
  const ship1 = new Ship(2, 'horizontal', 'ship1');
  const setPositionShip1Spy = jest.spyOn(ship1, 'setPosition');
  gameboard.placeShip(ship1, [0, 0]);
  expect(setPositionShip1Spy).toHaveBeenCalledTimes(1);
});

test('placeShip method should not call the setPosition method if position of the ship is already taken by another ship', () => {
  const gameboard = new Gameboard();
  const ship1 = new Ship(2, 'horizontal', 'ship1');
  const ship2 = new Ship(2, 'horizontal', 'ship2');
  const setPositionShip2Spy = jest.spyOn(ship2, 'setPosition');
  gameboard.placeShip(ship1, [0, 0]);
  gameboard.placeShip(ship2, [0, 0]);
  expect(setPositionShip2Spy).toHaveBeenCalledTimes(0);
});

test('placeShip method should not call the setPosition method if position of the ship is outside of gameboard limits', () => {
  const gameboard = new Gameboard();
  const ship1 = new Ship(2, 'horizontal', 'ship1');
  const setPositionShip1Spy = jest.spyOn(ship1, 'setPosition');
  gameboard.placeShip(ship1, [11, 0]);
  gameboard.placeShip(ship1, [9, 0]); //  ship1 is 2 squares long, so it can't be placed at [9, 0]
  expect(setPositionShip1Spy).toHaveBeenCalledTimes(0);
});

// needed ? testing an outgoing command message ? so we would need to expect to send outgoing command message,not test the side effects
test('placeShip method should turn the passed in position from water to ship if coordonates are valid', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(2, 'horizontal', 'ship');
  gameboard.placeShip(ship, [1, 1]);
  expect(gameboard.board[1][1].shipReference).not.toBeNull();
  expect(gameboard.board[2][1].shipReference).not.toBeNull();
  expect(gameboard.board[3][1].shipReference).toBeNull();
});

test('placeShip method should call turnWaterToShip method with the correct args if ship position is valid', () => {
  const gameboard = new Gameboard();
  const turnWaterToShipSpy = jest.spyOn(gameboard, 'turnWaterToShip');
  gameboard.turnWaterToShip = turnWaterToShipSpy;
  const ship = new Ship(2, 'vertical', 'ship');
  gameboard.placeShip(ship, [1, 2]);
  expect(turnWaterToShipSpy).toHaveBeenCalledTimes(1);
  expect(turnWaterToShipSpy).toHaveBeenCalledWith(ship.position, ship);
});

test('receiveAttack method should return already attacked square if target square has already been attacked', () => {
  const gameboard = new Gameboard();
  gameboard.receiveAttack([1, 1]);
  expect(gameboard.receiveAttack([1, 1])).toBe('already attacked square');
});

test('receiveAttack method should call the attack method on the target square if it has not been attacked yet', () => {
  const gameboard = new Gameboard();
  const target = gameboard.board[1][1];
  const attackSpy = jest.spyOn(target, 'attack');
  target.attack = attackSpy;
  gameboard.receiveAttack([1, 1]);
  expect(attackSpy).toHaveBeenCalledTimes(1);
  gameboard.receiveAttack([1, 1]);
  expect(attackSpy).toHaveBeenCalledTimes(1); // no more call to attack method on target square
});

test('receiveAttack method should call the hit method on the attacked ship if one ship is on the target square', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(2, 'vertical', 'ship');
  gameboard.placeShip(ship, [1, 1]);
  const hitSpy = jest.spyOn(ship, 'hit');
  gameboard.receiveAttack([1, 1]);
  expect(hitSpy).toHaveBeenCalledTimes(1);
  gameboard.receiveAttack([2, 3]);
  expect(hitSpy).toHaveBeenCalledTimes(1); // no ship on this square, so no more call to manageAttackOnShip
});

test('receiveAttack method should return hit if a ship is on the target square', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(2, 'vertical', 'ship');
  gameboard.placeShip(ship, [1, 1]);
  expect(gameboard.receiveAttack([1, 1])).toBe('hit');
});

test('receiveAttack method should return missed if no ship is on the target square', () => {
  const gameboard = new Gameboard();
  expect(gameboard.receiveAttack([1, 1])).toBe('missed');
});

test('placeShipsRandomly method should call the placeShip method as long as the ship is not placed (with valid position)', () => {
  const gameboard = new Gameboard();
  const placeShipSpy = jest.spyOn(gameboard, 'placeShip');
  const ship = new Ship(2, 'vertical', 'ship');
  gameboard.fleetManager.ships = [ship];
  gameboard.placeShipsRandomly();
  expect(placeShipSpy).toHaveBeenCalled();
  expect(ship.isPlaced()).toBe(true);
});

test('placeShipsRandomly method should call the placeShip method on every ship as long as all the ships are not placed (with valid position)', () => {
  const gameboard = new Gameboard();
  const placeShipSpy = jest.spyOn(gameboard, 'placeShip');
  const ship1 = new Ship(2, 'vertical', 'ship1');
  const ship2 = new Ship(2, 'vertical', 'ship2');
  gameboard.fleetManager.ships = [ship1, ship2];
  gameboard.placeShipsRandomly();
  expect(placeShipSpy).toHaveBeenCalled();
  expect(ship1.isPlaced()).toBe(true);
  expect(ship2.isPlaced()).toBe(true);
});

test('placeShipsRandomly method should call the placeShip method with a starting coordonates between 0 and board max lenghth', () => {
  const gameboard = new Gameboard();
  const placeShipSpy = jest.spyOn(gameboard, 'placeShip');
  const ship = new Ship(2, 'vertical', 'ship');
  gameboard.fleetManager.ships = [ship];
  gameboard.placeShipsRandomly();
  expect(placeShipSpy).toHaveBeenCalled();
  expect(placeShipSpy.mock.calls[0][1][0]).toBeGreaterThanOrEqual(0);
  expect(placeShipSpy.mock.calls[0][1][0]).toBeLessThanOrEqual(9);
  expect(placeShipSpy.mock.calls[0][1][1]).toBeGreaterThanOrEqual(0);
  expect(placeShipSpy.mock.calls[0][1][1]).toBeLessThanOrEqual(9);
});

test('placeShipsRandomly method should call the setOrientationRandomly on each ship at each placement try', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(2, 'vertical', 'ship');
  const setOrientationRandomlySpy = jest.spyOn(ship, 'setOrientationRandomly');
  gameboard.fleetManager.ships = [ship];
  gameboard.placeShipsRandomly();
  expect(setOrientationRandomlySpy).toHaveBeenCalled();
});
