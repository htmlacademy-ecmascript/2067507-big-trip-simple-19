import AbstractView from '../framework/view/abstract-view.js';
import { humanizeDate} from '../utils/trip';

const DATE_FORMAT_TIME = 'HH:mm';
const DATE_FORMAT_DAY = 'DD MMM';

const DATE_FORMAT = 'DD/MM/YYYY HH:mm';

function createDestinationTemplate(trip) {
  const {basePrice, dateFrom, dateTo, type, destinationPoint, checkedOffers} = trip;
  const {name} = destinationPoint;

  const timeFromHum = humanizeDate(dateFrom, DATE_FORMAT_TIME);
  const timeToHum = humanizeDate(dateTo, DATE_FORMAT_TIME);
  const dateFromHum = humanizeDate(dateFrom, DATE_FORMAT_DAY);
  const fullDateFromHum = humanizeDate(dateFrom, DATE_FORMAT);
  const fullDateToHum = humanizeDate(dateTo, DATE_FORMAT);

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

export default class NewDestination extends AbstractView{
  #trip = null;
  // #allOffers = null;
  #handleEditClick = null;

  constructor({trip, onEditClick}) {
    super();
    this.#trip = trip;
    // this.#allOffers = allOffers;
    this.#handleEditClick = onEditClick;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
    // this.offersByType = offersByType;
  }

  get template() {
    return createDestinationTemplate(this.#trip);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };
}

