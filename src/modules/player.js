export default class Player {
  constructor(name, gameboard, ennemyGameboard) {
    this.name = name;
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
