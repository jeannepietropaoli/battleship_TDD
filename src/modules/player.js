export default class Player {
  constructor(gameboard, ennemyGameboard) {
    this.gameboard = gameboard;
    this.ennemyGameboard = ennemyGameboard;
    this.turn = false;
  }

  chooseSquareToAttack() {}

  play(targetPosition) {
    if (this.turn) {
      this.ennemyGameboard.receiveAttack(targetPosition);
      this.turn = false;
    }
  }
}
