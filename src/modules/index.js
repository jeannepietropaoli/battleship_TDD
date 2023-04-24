import '../styles/main.css';
import GameAgainstComputer from './game';

const resetBtn = document.querySelector('#reset');

const game = new GameAgainstComputer();

resetBtn.addEventListener('click', () => {
  window.location.reload();
});

game.startBtn.addEventListener(
  'click',
  (e) => {
    e.stopPropagation();
    game.start();
    game.startBtn.remove();
  }
  // { once: true }
);
