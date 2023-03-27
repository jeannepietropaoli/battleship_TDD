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