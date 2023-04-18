import Player from '../player';
import Gameboard from '../gameboard';
import GameAgainstComputer from '../game';
import GameboardRenderer from '../gameboardRendering';
import Computer from '../computer';

jest.mock('../player');
jest.mock('../gameboardRendering');
jest.mock('../computer');
jest.mock('../gameboard');
jest.mock('../placing');

const game = new GameAgainstComputer();

test('instantiating a new game should call the Gameboard class twice to create two gameboards', () => {
  expect(Gameboard).toHaveBeenCalledTimes(2);
});

test('instantiating a new game against computer should call the Player class and Computer class once with correct args to create two players and set player1 as first player', () => {
  expect(Player).toHaveBeenCalledTimes(1);
  expect(Computer).toHaveBeenCalledTimes(1);
  expect(Player).toHaveBeenCalledWith(game.gameboardPlayer1, 'Player 1');
  expect(Computer).toHaveBeenCalledWith(game.gameboardPlayer2);
  expect(game.player1).toBeInstanceOf(Player);
  expect(game.player2).toBeInstanceOf(Computer);
});

test('instantiating a new game should set the player1 s turn to true to make him play first', () => {
  expect(game.player1.turn).toBe(true);
});

test('instantiating a new game should set each player s ennemy', () => {
  expect(game.player1.ennemy).toBe(game.player2);
  expect(game.player2.ennemy).toBe(game.player1);
});

test('instantiating a new game should call the GameboardRenderer class with correct args twice and set each player s gameboard renderer', () => {
  expect(GameboardRenderer).toHaveBeenCalledTimes(2);
  expect(GameboardRenderer).toHaveBeenCalledWith(game.gameboardPlayer1);
  expect(GameboardRenderer).toHaveBeenCalledWith(game.gameboardPlayer2);
  expect(game.gameboardPlayer1.renderer).toBeInstanceOf(GameboardRenderer);
  expect(game.gameboardPlayer2.renderer).toBeInstanceOf(GameboardRenderer);
});

test('instantiating a new game should call the displayGrid method on each player s gameboard renderer', () => {
  expect(game.gameboardPlayer1.renderer.displayGrid).toHaveBeenCalledTimes(1);
  expect(game.gameboardPlayer2.renderer.displayGrid).toHaveBeenCalledTimes(1);
});

afterAll(() => {
  jest.unmock('../player');
  jest.unmock('../gameboard');
  jest.unmock('../gameboardRendering');
  jest.unmock('../computer');
  jest.unmock('../placing');
});
