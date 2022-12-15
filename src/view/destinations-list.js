import { createElement } from '../render';

function createListTemplate() {
  return (
    `<ul class="trip-events__list">
    </ul>`
  );
}

export default class NewList {
  getTemplate() {
    return createListTemplate();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}