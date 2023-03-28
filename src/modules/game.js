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
  }
}
