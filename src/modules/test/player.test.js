import Gameboard from '../gameboard';
import Player from '../player';
import GameboardRenderer from '../gameboardRendering';

test('player class should instantiate a new player with its gameboard and its name and set its turn to false by default', () => {
  const gameboard1 = new Gameboard();
  const player1 = new Player(gameboard1, 'player 1');
  expect(player1.gameboard).toBe(gameboard1);
  expect(player1.name).toBe('player 1');
  expect(player1.turn).toBe(false);
});

test('chooseTarget should call the clickOnSquare method on the ennemy gameboard', () => {
  const gameboard1 = new Gameboard();
  const gameboard2 = new Gameboard();
  const player1 = new Player(gameboard1, 'player 1');
  const player2 = new Player(gameboard2, 'player 2');
  gameboard1.renderer = new GameboardRenderer(gameboard1);
  gameboard2.renderer = new GameboardRenderer(gameboard2);
  player1.ennemy = player2;
  const clickOnSquareMock = jest.fn();
  gameboard2.renderer.clickOnSquare = clickOnSquareMock;
  player1.chooseTarget();
  expect(clickOnSquareMock).toHaveBeenCalledTimes(1);
});
