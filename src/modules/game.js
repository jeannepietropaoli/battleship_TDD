import Gameboard from './gameboard';
import GameboardRenderer from './gameboardRendering';
import Player from './player';

export default class Game {
  constructor() {
    // create both gameboards
    this.gameboardPlayer1 = new Gameboard();
    this.gameboardPlayer2 = new Gameboard();

    // create both players and set player1 as first player
    this.player1 = new Player(this.gameboardPlayer1, 'Player 1');
    this.player2 = new Player(this.gameboardPlayer2, 'Player 2');
    this.player1.turn = true;

    this.player1.ennemy = this.player2;
    this.player2.ennemy = this.player1;

    // create both gameboard renderers
    this.player1.gameboardRenderer = new GameboardRenderer(
      this.gameboardPlayer1
    );
    this.player2.gameboardRenderer = new GameboardRenderer(
      this.gameboardPlayer2
    );

    // create both DOM grids
    this.player1.gameboardRenderer.displayGrid();
    this.player2.gameboardRenderer.displayGrid();

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

    // display ships on both grids  (for testing purposes)
    this.player1.gameboardRenderer.displayShips();
    this.player2.gameboardRenderer.displayShips();
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
      const targetSquareElement = await currentPlayer.chooseTarget();
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
