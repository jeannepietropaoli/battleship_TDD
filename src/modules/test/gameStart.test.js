import Game from '../game';

test('start method of the Game class should call announceWinner method if one of the players has no more ship', () => {
  const game = new Game();
  const announceWinnerMock = jest.fn();
  game.announceWinner = announceWinnerMock;
  game.player1.gameboard.fleetManager.ships = [];
  game.start();
  expect(announceWinnerMock).toHaveBeenCalledTimes(1);
});

// DOM Manipulations outside of the frame of this project
/* test('start method of the Game class should call the chooseTarget method of the player whose turn is true', async () => {
  const game = new Game();
  const chooseTargetMock = jest.fn();
  game.player1.chooseTarget = chooseTargetMock;
  game.player1.turn = true;
  await game.start();
  expect(chooseTargetMock).toHaveBeenCalledTimes(1);
}); */
