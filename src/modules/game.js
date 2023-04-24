import Gameboard from './gameboard';
import GameboardRenderer from './gameboardRendering';
import Player from './player';
import Computer from './computer';
import activateDragAndDrop from './placing';
import instructions from './instructions';

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
    this.gameboardPlayer1.renderer.setDataPlayerAttribute(this.player1);
    this.gameboardPlayer2.renderer.setDataPlayerAttribute(this.player2);

    // place ships randomly on computer gameboard
    this.gameboardPlayer2.placeShipsRandomly();

    this.startBtn = document.querySelector('#start-button');
    this.gameboardPlayer2.renderer.appendElement(this.startBtn);

    // blur player2 gameboard
    this.gameboardPlayer2.renderer.blur();

    // activate drag and drop on player1 gameboard
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
    winner instanceof Computer
      ? instructions.update('computerWins')
      : instructions.update('playerWins');
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

  setTurnInstructions(currentPlayer) {
    currentPlayer.name === 'Player 1'
      ? instructions.update('playerTurn')
      : instructions.update('computerTurn');
  }

  async start() {
    while (this.bothPlayersHaveShips()) {
      const [currentPlayer, ennemyPlayer] = this.setPlayersRoles();
      this.setTurnInstructions(currentPlayer);
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
