import '../styles/main.css';
import GameAgainstComputer from './game';

const startButton = document.querySelector('#start-button');

const game = new GameAgainstComputer();

startButton.addEventListener(
  'click',
  () => {
    game.start();
  },
  { once: true }
);
