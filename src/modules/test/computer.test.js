import Computer from '../computer';
import Player from '../player';
import Gameboard from '../gameboard';
import GameboardRenderer from '../gameboardRendering';

test('Computer is a subclass of Player', () => {
  const computer = new Computer();
  expect(computer instanceof Player).toBe(true);
});

test('Computer should have a delayBeforePlaying property set to 1000 by default', () => {
  const computer = new Computer();
  expect(computer.delayBeforePlaying).toBe(1000);
});

test('Computer should have a chooseTarget method that returns a promise', () => {
  const gameboardPlayer = new Gameboard();
  const gameboardComputer = new Gameboard();
  const computer = new Computer(gameboardComputer);
  const player = new Player(gameboardPlayer, 'Player 1');
  computer.gameboard.renderer = new GameboardRenderer(gameboardComputer);
  player.gameboard.renderer = new GameboardRenderer(gameboardPlayer);
  computer.ennemy = player;
  expect(computer.chooseTarget()).toBeInstanceOf(Promise);
});

test('Computer should have a chooseTarget method that returns a promise that resolves to a random square of the ennemy gameboard', async () => {
  const gameboardPlayer = new Gameboard();
  const gameboardComputer = new Gameboard();
  const player = new Player(gameboardPlayer, 'Player 1');
  const computer = new Computer(gameboardComputer);
  player.ennemy = computer;
  computer.ennemy = player;
  player.gameboard.renderer = new GameboardRenderer(gameboardPlayer);
  computer.gameboard.renderer = new GameboardRenderer(gameboardComputer);
  Object.defineProperty(player.gameboard.renderer, 'squares', {
    get: jest.fn(() => [1, 2, 3, 4, 5, 6, 7, 8, 9]),
  });

  const square = await computer.chooseTarget();
  const { squares } = player.gameboard.renderer;
  expect(squares).toContain(square);
});
