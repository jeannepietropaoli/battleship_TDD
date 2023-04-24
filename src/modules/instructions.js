const instructions = (() => {
  const messages = {
    placeShips:
      'Drag and drop your ships on your gameboard, click on a ship to change its direction',
    startGame: 'Click on the button to start the game',
    playerTurn: "It's your turn, choose a square to attack",
    computerTurn: "It's your ennemy's turn",
    computerWins: 'You lost, better luck next time',
    playerWins: 'You won, congratulations!',
  };

  const instructionsElement = document.querySelector('#instructions');

  const update = (context) => {
    instructionsElement.textContent = messages[context];
  };

  return { update };
})();

export default instructions;
