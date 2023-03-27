import Gameboard from '../gameboard';
import Ship from '../ship';

test('Gameboard instance correctly builds a 10 x 10 battleship gameboard', () => {
  const gameboard = new Gameboard();
  expect(gameboard.board.length).toBe(10);
  expect(gameboard.board[0].length).toBe(10);
});

test('Gameboard instance correctly creates a board object with the right coordonates for each square', () => {
  const gameboard = new Gameboard();
  expect(gameboard.board[0][0].coordonates).toEqual([0, 0]);
  expect(
    gameboard.board[gameboard.xMax - 1][gameboard.yMax - 1].coordonates
  ).toEqual([9, 9]);
  expect(gameboard.board[0][4].coordonates).toEqual([4, 0]);
});

test('placeShip method should return a new ship if position passed in is valid', () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShip([[0, 0]])).toBeInstanceOf(Ship);
});

// needed ? testing an outgoing command message ? so we would need to expect to send outgoing command message,not test the side effects
test('placeShip method should turn the passed in position from water to ship if coordonates are valid', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip([
    [1, 1],
    [2, 1],
  ]);
  expect(gameboard.board[1][1].shipReference).not.toBeNull();
  expect(gameboard.board[2][1].shipReference).not.toBeNull();
  expect(gameboard.board[3][1].shipReference).toBeNull();
});

// outgoing command mssg so we need to expect to send outgoing command messages using mocks
test('placeShip method should call turnWaterToShip', () => {
  const gameboard = new Gameboard();
  const turnWaterToShipMock = jest.fn();
  gameboard.turnWaterToShip = turnWaterToShipMock;
  gameboard.placeShip([
    [1, 2],
    [1, 3],
  ]);
  expect(turnWaterToShipMock).toHaveBeenCalledTimes(1);
});

test('placeShip method should return an error if position passed in is taken by another ship', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip([
    [1, 1],
    [2, 1],
  ]);
  expect(() => gameboard.placeShip([[1, 1]])).toThrow('invalid coordonates');
  expect(() => gameboard.placeShip([[2, 1]])).toThrow('invalid coordonates');
  expect(() => gameboard.placeShip([[3, 1]])).not.toThrow();
});

test('placeShip method should return an error if position passed in outside of the gameboard limits', () => {
  const gameboard = new Gameboard();
  expect(() => gameboard.placeShip([[11, 1]])).toThrow('invalid coordonates');
});

test('placeShip method should call addAShipToFleet with correct argument if coordonates passed in are valid', () => {
  const gameboard = new Gameboard();
  const addShipToFleetMock = jest.fn();
  gameboard.fleetManager.addAShipToFleet = addShipToFleetMock;
  const ship = gameboard.placeShip([[1, 2]]);
  expect(addShipToFleetMock).toHaveBeenCalledTimes(1);
  expect(addShipToFleetMock).toHaveBeenCalledWith(ship);
});
