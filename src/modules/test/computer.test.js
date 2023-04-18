import Computer from '../computer';
import Player from '../player';
import GameAgainstComputer from '../game';

test('Computer is a subclass of Player', () => {
  const computer = new Computer();
  expect(computer instanceof Player).toBe(true);
});

test('Computer should have a delayBeforePlaying property set to 1000 by default', () => {
  const computer = new Computer();
  expect(computer.delayBeforePlaying).toBe(1000);
});

test('Computer should have a chooseTarget method that returns a promise', () => {
  const game = new GameAgainstComputer();
  expect(game.player2.chooseTarget()).toBeInstanceOf(Promise);
});

test('Computer should have a chooseTarget method that returns a promise that resolves to a random square of the ennemy gameboard', async () => {
  const game = new GameAgainstComputer();
  const square = await game.player2.chooseTarget();
  const { squares } = game.player1.gameboard.renderer;
  expect(squares).toContain(square);
});
