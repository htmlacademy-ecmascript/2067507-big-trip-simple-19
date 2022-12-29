import AbstractView from '../framework/view/abstract-view';
import { humanizeDate } from '../utils/trip';


const DATE_FORMAT = 'DD/MM/YYYY HH:mm';

function createNewFormTemplate(trip) {
  const {basePrice, dateFrom, dateTo, type, destinationPoint, offerByType, offersByType} = trip;
  const {name, description, pictures} = destinationPoint;
  // const {src} = pictures[0];
  const dateFromHum = humanizeDate(dateFrom, DATE_FORMAT);
  const dateToHum = humanizeDate(dateTo, DATE_FORMAT);

  const { offers} = offerByType;

  return (
    `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-${trip.id}">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${trip.id}" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>

              ${offersByType.map((offer) => (`<div class="event__type-item">
              <input id="event-type-${offer.type}-${destinationPoint.id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${offer.type}">
              <label class="event__type-label  event__type-label--${offer.type}" for="event-type-${offer.type}-${destinationPoint.id}">${offer.type}</label>
            </div>`)).join('')}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-${destinationPoint.id}">
          ${type}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-${destinationPoint.id}" type="text" name="event-destination" value="${name}" list="destination-list-${destinationPoint.id}">
          <datalist id="destination-list-${destinationPoint.id}">
            <option value="Amsterdam"></option>
            <option value="Geneva"></option>
            <option value="Chamonix"></option>
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-${trip.id}">From</label>
          <input class="event__input  event__input--time" id="event-start-time-${trip.id}" type="text" name="event-start-time" value="${dateFromHum}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-${trip.id}">To</label>
          <input class="event__input  event__input--time" id="event-end-time-${trip.id}" type="text" name="event-end-time" value="${dateToHum}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-${trip.id}">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-${trip.id}" type="text" name="event-price" value="${basePrice}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Cancel</button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers">
          ${offers.map((offer) => (`<div class="event__offer-selector">
              <input class="event__offer-checkbox  visually-hidden" id="event-offer-${type}-${offer.id}" type="checkbox" name="event-offer-${type}" ${trip.offers.includes(offer.id) ? 'checked' : ''}>
              <label class="event__offer-label" for="event-offer-${type}-${offer.id}">
                <span class="event__offer-title">${offer.title}</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">${offer.price}</span>
              </label>
            </div>`)).join('')}
          </div>
        </section>

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${description}</p>

          <div class="event__photos-container">
            <div class="event__photos-tape">
            ${pictures.map((picture) => (`<img class="event__photo" src="${picture.src}" alt="${picture.description}">`)).join('')}
            </div>
          </div>
        </section>
      </section>
    </form>
  </li>`
  );
}

export default class NewForm extends AbstractView {
  #handleFormSubmit = null;
  #trip = null;
  // #allOffers = null;


  constructor({trip, onFormSubmit}) {
    super();
    this.#trip = trip;
    // this.#allOffers = allOffers;
    this.#handleFormSubmit = onFormSubmit;

    this.element.querySelector('.event--edit').addEventListener('submit', this.#formSubmitHandler);
  }

  get template() {
    return createNewFormTemplate(this.#trip);
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit();
  };
}
