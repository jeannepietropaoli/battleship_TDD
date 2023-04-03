import Player from './player';

export default class Computer extends Player {
  constructor(gameboard) {
    super(gameboard, 'Computer');
    this.delayBeforePlaying = 1000;
  }

  chooseTarget() {
    const { squares } = this.ennemy.gameboardRenderer;
    const randomIndex = Math.floor(Math.random() * squares.length);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(squares[randomIndex]);
      }, this.delayBeforePlaying);
    });
  }
}
