import Square from './square';

const gameboardXMax = 10;

export default class Gameboard {
  constructor() {
    this.xMax = gameboardXMax;
    this.yMax = this.xMax;
    this.board = (() => {
      const board = [];
      for (let i = 0; i < this.xMax; i++) {
        const row = [];
        board.push(row);
        for (let j = 0; j < this.yMax; j++) {
          row.push(new Square(j, i));
        }
      }
      return board;
    })();
  }
}
