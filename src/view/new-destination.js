import AbstractView from '../framework/view/abstract-view.js';
import { humanizeDate } from '../utils/trip';
import { DateFormat } from '../const.js';

function createDestinationTemplate(trip) {
  const { basePrice, dateFrom, dateTo, type, destinationPoint, offerByType } = trip;
  const { name } = destinationPoint;
  const timeFromHum = humanizeDate(dateFrom, DateFormat.TIME);
  const timeToHum = humanizeDate(dateTo, DateFormat.TIME);
  const dateFromHum = humanizeDate(dateFrom, DateFormat.DAY);
  const fullDateFromHum = humanizeDate(dateFrom, DateFormat.FORMS);
  const fullDateToHum = humanizeDate(dateTo, DateFormat.FORMS);

  const checkedOffers = [];
  function showChecked() {
    for (let i = 0; i < trip.offers.length; i++) {
      for (let j = 0; j < offerByType.offers.length; j++) {
        if (trip.offers[i] === offerByType.offers[j].id) {
          checkedOffers.push(offerByType.offers[j]);
        }
      }
    }
    return checkedOffers;
  }
  showChecked();

  return (
    `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${fullDateFromHum}">${dateFromHum}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${fullDateFromHum}">${timeFromHum}</time>
          &mdash;
          <time class="event__end-time" datetime="${fullDateToHum}">${timeToHum}</time>
        </p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${checkedOffers.map((offer) => (`<li class="event__offer">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </li>`)).join('')}
      </ul>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
}

export default class NewDestination extends AbstractView {
  #trip = null;
  #handleEditClick = null;

  constructor({ trip, onEditClick }) {
    super();
    this.#trip = trip;
    this.#handleEditClick = onEditClick;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
  }

  get template() {
    return createDestinationTemplate(this.#trip);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };
}

