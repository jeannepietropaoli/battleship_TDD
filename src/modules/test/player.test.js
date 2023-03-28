import Gameboard from '../gameboard';
import Player from '../player';

test('player class should instantiate a new player with its gameboard and ennemy gameboard', () => {
  const gameboard1 = new Gameboard();
  const gameboard2 = new Gameboard();
  const player1 = new Player('player1', gameboard1, gameboard2);
  expect(player1.gameboard).toBe(gameboard1);
  expect(player1.ennemyGameboard).toBe(gameboard2);
});

test('play method should call the receiveAttack on the ennemy gameboard if it is the player s turn', () => {
  const gameboard1 = new Gameboard();
  const gameboard2 = new Gameboard();
  const player1 = new Player('player1', gameboard1, gameboard2);
  const receiveAttackMock = jest.fn();
  player1.ennemyGameboard.receiveAttack = receiveAttackMock;
  player1.turn = true;
  player1.play([1, 1]);
  expect(receiveAttackMock).toHaveBeenCalledTimes(1);
});

test('play method should switch player s turn to false if player just played', () => {
  const gameboard1 = new Gameboard();
  const gameboard2 = new Gameboard();
  const player1 = new Player('player1', gameboard1, gameboard2);
  player1.turn = true;
  player1.play([1, 1]);
  expect(player1.turn).toBe(false);
});
