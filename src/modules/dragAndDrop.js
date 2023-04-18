export class DragAndDropEvents {
  dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id); // id attribute ensure that the element is unique
    setTimeout(() => {
      e.target.classList.add('hide');
    }, 0);
  }

  dragEnter(e) {
    e.preventDefault(); // override the default behavior of both dragenter and dragover events to make sure that the drop event is fired (make the drop target valid)
    // e.target.classList.add('drag-over');
  }

  dragOver(e) {
    e.preventDefault();
    // e.target.classList.add('drag-over');
  }

  dragLeave(e) {
    // e.target.classList.remove('drag-over');
  }

  dragDrop(e) {
    const id = e.dataTransfer.getData('text/plain');
    const start = JSON.parse(e.target.getAttribute('data-position'));
    const draggable = document.getElementById(id);
    return [start, id, draggable];
  }

  dragEnd(e) {
    e.target.classList.remove('hide');
  }
}

export const dragAndDropEvents = new DragAndDropEvents();
