export default class Player {
  constructor(gameboard, name) {
    this.gameboard = gameboard;
    this.name = name;
    this.turn = false;
  }

  async chooseTarget() {
    const square = await this.ennemy.gameboard.renderer.clickOnSquare();
    return square;
  }
}
