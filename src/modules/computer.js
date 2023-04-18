import Player from './player';

export default class Computer extends Player {
  constructor(gameboard, delayBeforePlaying = 1000) {
    super(gameboard, 'Computer');
    this.delayBeforePlaying = delayBeforePlaying;
  }

  chooseTarget() {
    const { squares } = this.ennemy.gameboard.renderer;
    const randomIndex = Math.floor(Math.random() * squares.length);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(squares[randomIndex]);
      }, this.delayBeforePlaying);
    });
  }
}
