import Player from '../player';
import Gameboard from '../gameboard';
import Game from '../game';
import GameboardRenderer from '../gameboardRendering';

jest.mock('../player');
jest.mock('../gameboard');
jest.mock('../gameboardRendering');
const game = new Game();

test('instantiating a new game should call the Player class twice with correct args to create two players', () => {
  expect(Player).toHaveBeenCalledTimes(2);
  expect(Player).toHaveBeenCalledWith(
    game.gameboardPlayer1,
    game.gameboardPlayer2
  );
  expect(Player).toHaveBeenCalledWith(
    game.gameboardPlayer2,
    game.gameboardPlayer1
  );
});

test('instantiating a new game should call the Gameboard class twice to create two gameboards', () => {
  expect(Gameboard).toHaveBeenCalledTimes(2);
});

test('instantiating a new game should call the GameboardRenderer class with correct args twice to create two gameboards', () => {
  expect(GameboardRenderer).toHaveBeenCalledTimes(2);
  expect(GameboardRenderer).toHaveBeenCalledWith(game.gameboardPlayer1);
  expect(GameboardRenderer).toHaveBeenCalledWith(game.gameboardPlayer2);
});

afterAll(() => {
  jest.unmock('../player');
  jest.unmock('../gameboard');
  jest.unmock('../gameboardRendering');
});
