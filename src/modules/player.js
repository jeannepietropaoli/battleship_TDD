export default class Player {
  constructor(gameboard, ennemyGameboard, name) {
    this.gameboard = gameboard;
    this.ennemyGameboard = ennemyGameboard;
    this.turn = false;
    this.name = name;
  }

  chooseSquareToAttack() {}

  play(targetPosition) {
    if (this.turn) {
      this.ennemyGameboard.receiveAttack(targetPosition);
      this.turn = false;
    }
  }
}
