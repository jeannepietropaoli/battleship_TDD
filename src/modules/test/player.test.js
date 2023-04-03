import Gameboard from '../gameboard';
import Player from '../player';
import Game from '../game';

test('player class should instantiate a new player with its gameboard, its name and its turn set to false', () => {
  const gameboard1 = new Gameboard();
  const player1 = new Player(gameboard1, 'player 1');
  expect(player1.gameboard).toBe(gameboard1);
  expect(player1.name).toBe('player 1');
  expect(player1.turn).toBe(false);
});

test('chooseTarget should call the clickOnSquare method on the ennemy gameboard', () => {
  const game = new Game();
  const clickOnSquareMock = jest.fn();
  game.player1.ennemy.gameboardRenderer.clickOnSquare = clickOnSquareMock;
  game.player1.chooseTarget();
  expect(clickOnSquareMock).toHaveBeenCalledTimes(1);
});
