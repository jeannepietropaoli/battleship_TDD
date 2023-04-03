import Player from '../player';
import Gameboard from '../gameboard';
import Game from '../game';
import GameboardRenderer from '../gameboardRendering';

jest.mock('../player');
jest.mock('../gameboard');
jest.mock('../gameboardRendering');
const game = new Game();

test('instantiating a new game should call the Gameboard class twice to create two gameboards', () => {
  expect(Gameboard).toHaveBeenCalledTimes(2);
});

test('instantiating a new game should call the Player class twice with correct args to create two players and set player1 as first player', () => {
  expect(Player).toHaveBeenCalledTimes(2);
  expect(Player).toHaveBeenCalledWith(game.gameboardPlayer1, 'Player 1');
  expect(Player).toHaveBeenCalledWith(game.gameboardPlayer2, 'Player 2');
  expect(game.player1).toBeInstanceOf(Player);
  expect(game.player2).toBeInstanceOf(Player);
});

test('instantiating a new game should set the player1 s turn to true to make him play first', () => {
  expect(game.player1.turn).toBe(true);
});

test('instantiating a new game should set each player s ennemy', () => {
  expect(game.player1.ennemy).toBe(game.player2);
  expect(game.player2.ennemy).toBe(game.player1);
});

test('instantiating a new game should call the GameboardRenderer class with correct args twice to set each player s gameboard renderer', () => {
  expect(GameboardRenderer).toHaveBeenCalledTimes(2);
  expect(GameboardRenderer).toHaveBeenCalledWith(game.gameboardPlayer1);
  expect(GameboardRenderer).toHaveBeenCalledWith(game.gameboardPlayer2);
});

test('instantiating a new game should call the displayGrid method on each player s gameboard renderer', () => {
  expect(game.player1.gameboardRenderer.displayGrid).toHaveBeenCalledTimes(1);
  expect(game.player2.gameboardRenderer.displayGrid).toHaveBeenCalledTimes(1);
});

afterAll(() => {
  jest.unmock('../player');
  jest.unmock('../gameboard');
  jest.unmock('../gameboardRendering');
});
