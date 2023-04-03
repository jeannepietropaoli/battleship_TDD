import Game from '../game';
import GameAgainstComputer from '../gameAgainstComputer';
import Computer from '../computer';

test('GameAgainstComputer is a subclass of Game', () => {
  const gameAgainstComputer = new GameAgainstComputer();
  expect(gameAgainstComputer instanceof Game).toBe(true);
});

test('GameAgainstComputer should replace the player2 by a new Computer instance', () => {
  const gameAgainstComputer = new GameAgainstComputer();
  expect(gameAgainstComputer.player2).toBeInstanceOf(Computer);
});

test('GameAgainstComputer should set the player1 s ennemy to the computer', () => {
  const gameAgainstComputer = new GameAgainstComputer();
  expect(gameAgainstComputer.player1.ennemy).toBe(gameAgainstComputer.player2);
});

test('GameAgainstComputer should set the computer s ennemy to the player1', () => {
  const gameAgainstComputer = new GameAgainstComputer();
  expect(gameAgainstComputer.player2.ennemy).toBe(gameAgainstComputer.player1);
});

test('GameAgainstComputer should set the computer s gameboard renderer to the player2 s gameboard renderer', () => {
  const gameAgainstComputer = new GameAgainstComputer();
  expect(gameAgainstComputer.player2.gameboardRenderer).toBe(
    gameAgainstComputer.gameboardRendererPlayer2
  );
});
