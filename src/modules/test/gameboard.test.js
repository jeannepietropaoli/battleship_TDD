import Gameboard from '../gameboard';

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
