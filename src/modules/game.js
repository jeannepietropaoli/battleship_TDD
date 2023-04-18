import Gameboard from './gameboard';
import GameboardRenderer from './gameboardRendering';
import Player from './player';
import Computer from './computer';
import activateDragAndDrop from './placing';

export default class GameAgainstComputer {
  constructor() {
    // create both gameboards
    this.gameboardPlayer1 = new Gameboard();
    this.gameboardPlayer2 = new Gameboard();

    // create both gameboard renderers
    this.gameboardPlayer1.renderer = new GameboardRenderer(
      this.gameboardPlayer1
    );
    this.gameboardPlayer2.renderer = new GameboardRenderer(
      this.gameboardPlayer2
    );

    // create both players and set player1 as first player
    this.player1 = new Player(this.gameboardPlayer1, 'Player 1');
    this.player2 = new Computer(this.gameboardPlayer2);
    this.player1.turn = true;

    this.player1.ennemy = this.player2;
    this.player2.ennemy = this.player1;

    // create both DOM grids
    this.gameboardPlayer1.renderer.displayGrid();
    this.gameboardPlayer2.renderer.displayGrid();

    // place ships randomly on computer gameboard
    this.gameboardPlayer2.placeShipsRandomly();

    // display ships on both grids  (for testing purposes)
    this.gameboardPlayer2.renderer.displayShips();

    activateDragAndDrop(this.gameboardPlayer1, this.player1);
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
      ennemyPlayer.gameboard.renderer.displayHitSquare(targetSquareElement);
    } else if (hitSquare === 'missed') {
      ennemyPlayer.gameboard.renderer.displayMissedSquare(targetSquareElement);
    }
  }

  async start() {
    while (this.bothPlayersHaveShips()) {
      const [currentPlayer, ennemyPlayer] = this.setPlayersRoles();
      const targetSquareElement = await currentPlayer.chooseTarget();
      const hitSquare = ennemyPlayer.gameboard.receiveAttack(
        JSON.parse(targetSquareElement.getAttribute('data-position'))
      );
      this.displaySquareResult(ennemyPlayer, targetSquareElement, hitSquare);
      if (hitSquare === 'missed')
        this.switchPlayersTurn(currentPlayer, ennemyPlayer);
    }
    this.announceWinner();
  }
}
