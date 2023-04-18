import { dragAndDropEvents } from './dragAndDrop';

function getHeightGameboardSquareElement() {
  const gameboardSquare = document.querySelector('.square');
  return gameboardSquare.offsetHeight;
}

function setShipElementSize(ship, shipElement) {
  const reference = getHeightGameboardSquareElement();
  if (ship.orientation === 'horizontal') {
    shipElement.style.width = `${ship.length * reference}px`;
    shipElement.style.height = `${reference}px`;
  } else {
    shipElement.style.width = `${reference}px`;
    shipElement.style.height = `${ship.length * reference}px`;
  }
}

function setShipElementAttributes(ship, shipElement) {
  shipElement.classList.add('ship');
  shipElement.setAttribute('draggable', true);
  shipElement.id = ship.name;
}

function setShipElementStyle(shipElement) {
  shipElement.style.backgroundColor = 'red';
}

function triggerShipElementDragEvents(shipElement) {
  shipElement.addEventListener('dragstart', dragAndDropEvents.dragStart);
  shipElement.addEventListener('dragend', dragAndDropEvents.dragEnd);
}

function triggerShipElementFlip(ship, shipElement) {
  shipElement.addEventListener('click', () => {
    ship.orientation === 'horizontal'
      ? (ship.orientation = 'vertical')
      : (ship.orientation = 'horizontal');
    setShipElementSize(ship, shipElement);
  });
}

function createDraggableShipElement(ship) {
  const draggable = document.createElement('div');
  document.querySelector('body').appendChild(draggable);
  setShipElementAttributes(ship, draggable);
  setShipElementSize(ship, draggable);
  setShipElementStyle(draggable);
  triggerShipElementDragEvents(draggable);
  triggerShipElementFlip(ship, draggable);
  return draggable;
}

function getShipsToDrag(gameboard) {
  return gameboard.fleetManager.ships;
}

function getdropTargets(player) {
  return player.gameboard.renderer.squares;
}

function findDraggedShip(gameboard, id) {
  return gameboard.fleetManager.ships.find((ship) => ship.name === id);
}

function enableStartButton() {
  const startButton = document.querySelector('#start-button');
  startButton.disabled = false;
}

function dropHandler(gameboard, player) {
  return (e) => {
    const [start, id, draggable] = dragAndDropEvents.dragDrop(e);
    const ship = findDraggedShip(gameboard, id);
    gameboard.placeShip(ship, start);
    if (ship.isPlaced()) {
      draggable.remove();
      player.gameboard.renderer.displayShip(ship);
    }
    if (gameboard.fleetManager.allShipsPlaced()) {
      enableStartButton();
    }
  };
}

function triggerTargetDrop(dropTarget, gameboard, player) {
  dropTarget.addEventListener('dragenter', dragAndDropEvents.dragEnter);
  dropTarget.addEventListener('dragover', dragAndDropEvents.dragOver);
  dropTarget.addEventListener('dragleave', dragAndDropEvents.dragLeave);
  const dropHandlerFn = dropHandler(gameboard, player);
  dropTarget.addEventListener('drop', dropHandlerFn);
}

export default function activateDragAndDrop(gameboard, player) {
  getShipsToDrag(gameboard).forEach((ship) => {
    createDraggableShipElement(ship);
  });

  getdropTargets(player).forEach((dropTarget) => {
    triggerTargetDrop(dropTarget, gameboard, player);
  });
}
