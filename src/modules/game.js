import Gameboard from './gameboard';
import GameboardRenderer from './gameboardRendering';
import Player from './player';

export default class Game {
  constructor() {
    // create both gameboards
    this.gameboardPlayer1 = new Gameboard();
    this.gameboardPlayer2 = new Gameboard();

    // create both players
    this.player1 = new Player(this.gameboardPlayer1, this.gameboardPlayer2);
    this.player2 = new Player(this.gameboardPlayer2, this.gameboardPlayer1);

    // create both gameboard renderers
    this.rendererPlayer1 = new GameboardRenderer(this.gameboardPlayer1);
    this.rendererPlayer2 = new GameboardRenderer(this.gameboardPlayer2);

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
  }

  async start() {
    let target;
    if (this.player1.turn) {
      target = await this.rendererPlayer1.readyToReceiveAttack();
      this.gameboardPlayer2.receiveAttack(target);
      this.player1.turn = false;
      this.player2.turn = true;
    } else {
      target = await this.rendererPlayer2.readyToReceiveAttack();
      this.gameboardPlayer1.receiveAttack(target);
      this.player2.turn = false;
      this.player1.turn = true;
    }
  }
}

// player 1 choose a target
// gameboard2 receive attack avec target choisie
// si target pas deja ciblé, marquer sur le gameboard2
// sinon rejouer
// changer tour joeur
