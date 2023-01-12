import {render} from '../framework/render.js';
import TripPresenter from './destination-presenter.js';
import NewSorting from '../view/sorting';
import { updateItem } from '../utils/common.js';
import NewList from '../view/destinations-list';
import { RenderPosition } from '../framework/render.js';
// import NewForm from '../view/new-form';
import { offersByType } from '../mock/task';
import NoTrips from '../view/no-trip';
import { SortType } from '../const.js';
import { sortPriceDown } from '../utils/trip.js';

export default class BoardPresenter {

  #listContainer = null;
  #tripModel = null;

  #listComponent = new NewList();

  #boardTrips = [];
  #tripPresenters = new Map();

  #noTripsComponent = new NoTrips();
  #sortingComponent = null;

  #currentSortType = SortType.DAY;
  #sourcedBoardTrips = [];

  constructor({listContainer, tripModel}) {
    this.#listContainer = listContainer;
    this.#tripModel = tripModel;

  }


  init() {
    this.#boardTrips = [...this.#tripModel.trip];

    this.#renderBoard();
    this.#sourcedBoardTrips = [...this.#tripModel.trip];

  }

  #renderTrip(trip) {
    const tripPresenter = new TripPresenter({
      tripListContainer: this.#listComponent.element,
      // onDataChange: this.#handleTripChange,
      onModeChange: this.#handleModeChange
    });
    //Что это вообще такое
    // console.log(this.#handleTripChange);
    tripPresenter.init(trip);
    this.#tripPresenters.set(trip.id, tripPresenter);

    // console.log(this.#tripPresenters);
  }

  #clearTripList() {
    this.#tripPresenters.forEach((presenter) => presenter.destroy());
    this.#tripPresenters.clear();
  }

  #renderNoTrips() {
    render(this.#noTripsComponent, this.#listContainer);
  }

  #handleModeChange = () => {
    this.#tripPresenters.forEach((presenter) => { presenter.resetView();});
  };

  #handleTripChange = (updatedTrip) => {
    this.#boardTrips = updateItem(this.#boardTrips, updatedTrip);
    this.#sourcedBoardTrips = updateItem(this.#sourcedBoardTrips, updatedTrip);
    this.#tripPresenters.get(updatedTrip.id).init(updatedTrip);
  };

  #sortTrips(sortType) {
    switch (sortType) {
      case SortType.PRICE:
        // console.log(this.#boardTrips);
        this.#boardTrips.sort(sortPriceDown);
        // console.log(this.#boardTrips);
        break;
      case SortType.DAY:
        // this.#boardTrips.sort(sortPriceDown);
        break;
      default:
        this.#boardTrips = [...this.#sourcedBoardTrips];
    }
    this.#currentSortType = sortType;
  }

  #handleSortTypeChange = (sortType) => {
    // console.log(sortType);
    // console.log(this.#currentSortType);
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#sortTrips(sortType);
    this.#clearTripList();
    this.#renderBoard();
    // console.log(this.#renderTrip())

  };

  #renderSorting() {
    this.#sortingComponent = new NewSorting({
      onSortTypeChange: this.#handleSortTypeChange
    });
    render(this.#sortingComponent, this.#listComponent.element, RenderPosition.BEFOREBEGIN);
  }

  #renderBoard() {
    if (this.#boardTrips.length === 0) {
      this.#renderNoTrips();
      return;
    }
    render(this.#listComponent, this.#listContainer);
    // render(new EditForm(), this.listComponent.element, RenderPosition.AFTERBEGIN);
    // render(new NewForm({trip: this.#boardTrips[0], allOffers: offersByType}), this.#listComponent.element, RenderPosition.BEFOREEND);
    for (let i = 0; i < this.#boardTrips.length; i++) {
      this.#renderTrip(this.#boardTrips[i], offersByType);
    }
    this.#renderSorting();
  }
}


