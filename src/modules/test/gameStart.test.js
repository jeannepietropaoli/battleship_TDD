import Game from '../game';

test('start method of the Game class should call announceWinner method if one of the players has no more ship', () => {
  const game = new Game();
  const announceWinnerMock = jest.fn();
  game.announceWinner = announceWinnerMock;
  game.player1.gameboard.fleetManager.ships = [];
  game.start();
  expect(announceWinnerMock).toHaveBeenCalledTimes(1);
});

/* test('start method of the Game class should call the chooseTarget method of the player whose turn is true', () => {
  const game = new Game();
  const chooseTargetMock = jest.fn();
  game.player1.chooseTarget = chooseTargetMock;
  game.player1.turn = true;
  game.start();
  expect(chooseTargetMock).toHaveBeenCalledTimes(1);
}); */
