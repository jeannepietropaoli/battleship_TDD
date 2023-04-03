import Game from './game';
import Computer from './computer';

export default class GameAgainstComputer extends Game {
  constructor() {
    super();
    this.player2 = new Computer(this.gameboardPlayer2);
    this.player1.ennemy = this.player2;
    this.player2.ennemy = this.player1;
    this.player2.gameboardRenderer = this.gameboardRendererPlayer2;
  }
}
