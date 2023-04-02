import Gameboard from './gameboard';
import GameboardRenderer from './gameboardRendering';
import Player from './player';

export default class Game {
  constructor() {
    // create both gameboards
    this.gameboardPlayer1 = new Gameboard();
    this.gameboardPlayer2 = new Gameboard();

    // create both players
    this.player1 = new Player(
      this.gameboardPlayer1,
      this.gameboardPlayer2,
      'Player 1'
    );
    this.player2 = new Player(
      this.gameboardPlayer2,
      this.gameboardPlayer1,
      'Player 2'
    );

    // create both gameboard renderers
    this.rendererPlayer1 = new GameboardRenderer(this.gameboardPlayer1);
    this.rendererPlayer2 = new GameboardRenderer(this.gameboardPlayer2);
    this.player1.gameboardRenderer = this.rendererPlayer1;
    this.player2.gameboardRenderer = this.rendererPlayer2;

    // create both DOM grids
    this.rendererPlayer1.displayGrid();
    this.rendererPlayer2.displayGrid();

    // populate player1 Gameboard with predetermined coordinates
    this.gameboardPlayer1.placeShip([
      [1, 1],
      [2, 1],
    ]);
    this.gameboardPlayer1.placeShip([
      [5, 5],
      [6, 5],
      [7, 5],
    ]);
    this.gameboardPlayer1.placeShip([[8, 8]]);

    // populate player2 Gameboard with predetermined coordinates
    this.gameboardPlayer2.placeShip([
      [4, 4],
      [5, 4],
    ]);
    this.gameboardPlayer2.placeShip([
      [5, 5],
      [4, 5],
      [3, 5],
    ]);
    this.gameboardPlayer2.placeShip([[7, 7]]);

    // choose first player
    this.player1.turn = true;

    // display ships on both grids  (for testing purposes)
    this.rendererPlayer1.displayShips();
    this.rendererPlayer2.displayShips();
  }

  switchPlayersTurn(currentPlayer, ennemyPlayer) {
    currentPlayer.turn = false;
    ennemyPlayer.turn = true;
  }

  identifyWinner() {
    return this.gameboardPlayer1.fleetManager.allShipsSunk()
      ? this.player2
      : this.player1;
  }

  announceWinner() {
    const winner = this.identifyWinner();
    alert(`The winner is ${winner.name}!`);
  }

  bothPlayersHaveShips() {
    return (
      !this.gameboardPlayer1.fleetManager.allShipsSunk() &&
      !this.gameboardPlayer2.fleetManager.allShipsSunk()
    );
  }

  setPlayersRoles() {
    return this.player1.turn
      ? [this.player1, this.player2]
      : [this.player2, this.player1];
  }

  displaySquareResult(ennemyPlayer, targetSquareElement, hitSquare) {
    if (hitSquare === 'hit') {
      ennemyPlayer.gameboardRenderer.displayHitSquare(targetSquareElement);
    } else if (hitSquare === 'missed') {
      ennemyPlayer.gameboardRenderer.displayMissedSquare(targetSquareElement);
    }
  }

  async start() {
    while (this.bothPlayersHaveShips()) {
      const [currentPlayer, ennemyPlayer] = this.setPlayersRoles();
      const targetSquareElement =
        await ennemyPlayer.gameboardRenderer.chooseSquareToAttack();
      const hitSquare = currentPlayer.ennemyGameboard.receiveAttack(
        JSON.parse(targetSquareElement.getAttribute('data-position'))
      );
      this.displaySquareResult(ennemyPlayer, targetSquareElement, hitSquare);
      if (hitSquare === 'missed')
        this.switchPlayersTurn(currentPlayer, ennemyPlayer);
    }
    this.announceWinner();
  }
}
