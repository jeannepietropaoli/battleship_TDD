import '../styles/main.css';
import Gameboard from './gameboard';
import Player from './player';
import GameboardRenderer from './gameboardRendering';

const gameboard1 = new Gameboard();
const gameboard2 = new Gameboard();
const gameboardRenderer1 = new GameboardRenderer(gameboard1);
const gameboardRenderer2 = new GameboardRenderer(gameboard2);
gameboardRenderer1.displayGrid();
gameboardRenderer2.displayGrid();
/* const player1 = new Player(gameboard1, gameboard2);
const player2 = new Player(gameboard1, gameboard2); */

/* 
function populateGameBoardPlayer1() {
  player1.gameboard.placeShip([
    [1, 1],
    [1, 2],
  ]);
  player1.gameboard.placeShip([
    [5, 6],
    [5, 5],
  ]);
}

function populateGameBoardPlayer2() {
  player1.gameboard.placeShip([
    [3, 1],
    [3, 2],
  ]);
  player1.gameboard.placeShip([
    [6, 6],
    [6, 7],
  ]);
}

function gameFlow() {
  populateGameBoardPlayer1();
  populateGameBoardPlayer2();
  player1.turn = true;
  while (
    !player1.gameboard.fleetManager.isEmpty() &&
    !player2.gameboard.fleetManager.isEmpty()
  ) {
    const currentPlayer = player1.turn ? player1 : player2;
    const target = prompt('');
  }
} */
