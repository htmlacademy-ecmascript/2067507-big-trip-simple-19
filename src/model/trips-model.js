import { getRandomTrip } from '../mock/task';
import { offersByType } from '../mock/task';
import { destinationsList } from '../mock/task';
// console.log(offersByType)
const TRIP_COUNT = 22;

export default class TripModel {
  #trips = Array.from({length: TRIP_COUNT}, getRandomTrip);
  #allOffersByType = offersByType;
  #pointsList = destinationsList;

  get trip() {
    return this.#trips.map((trip) => {
      const destinationPoint = this.#pointsList.find((point) => point.id === trip.id);
      const offerByType = this.#allOffersByType.find((offer) => offer.type === trip.type);
      const checkedOffers = [];
      function showChecked () {
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

      return {
        ...trip,
        offerByType,
        offersByType,
        destinationPoint,
        checkedOffers
      };
    });
  }
}

