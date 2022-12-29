import { getRandomArrayElement, getRandomPositiveInteger } from '../utils/common';


const newData = [
  {
    'basePrice': 190,
    'dateFrom': '2017-07-10T22:55:56.845Z',
    'dateTo': '2018-07-11T11:22:13.375Z',
    'destination': 1,
    'id': 1,
    'offers': [1, 3],
    'type': 'taxi'
  },
  {
    'basePrice': 490,
    'dateFrom': '2017-07-10T22:55:56.845Z',
    'dateTo': '2018-07-11T11:22:13.375Z',
    'destination': 2,
    'id': 2,
    'offers': [1],
    'type': 'bus'
  },
  {
    'basePrice': 1000,
    'dateFrom': '2017-07-10T22:55:56.845Z',
    'dateTo': '2018-07-11T11:22:13.375Z',
    'destination': 3,
    'id': 3,
    'offers': [1, 2],
    'type': 'train'
  },
  {
    'basePrice': 1540,
    'dateFrom': '2017-07-10T22:55:56.845Z',
    'dateTo': '2018-07-11T11:22:13.375Z',
    'destination': 4,
    'id': 4,
    'offers': [3],
    'type': 'ship'
  },
  {
    'basePrice': 180,
    'dateFrom': '2017-07-12T14:43:56.845Z',
    'dateTo': '2018-07-11T19:25:13.375Z',
    'destination': 5,
    'id': 5,
    'offers': [2],
    'type': 'drive'
  },
  {
    'basePrice': 190,
    'dateFrom': '2023-07-09T20:55:56.845Z',
    'dateTo': '2023-07-11T08:55:13.375Z',
    'destination': 6,
    'id': 6,
    'offers': [1, 3],
    'type': 'flight'
  },
  {
    'basePrice': 9990,
    'dateFrom': '2016-07-10T22:55:56.845Z',
    'dateTo': '2016-07-11T09:12:34.375Z',
    'destination': 7,
    'id': 7,
    'offers': [2],
    'type': 'check-in'
  },
  {
    'basePrice': 1430,
    'dateFrom': '2023-06-09T12:30:56.845Z',
    'dateTo': '2023-07-11T10:21:13.375Z',
    'destination': 8,
    'id': 8,
    'offers': [2,3],
    'type': 'sightseeing'
  },
  {
    'basePrice': 7550,
    'dateFrom': '2024-07-10T22:55:56.845Z',
    'dateTo': '2024-07-13T11:23:15.375Z',
    'destination': 9,
    'id': 9,
    'offers': [1, 2],
    'type': 'restaurant'
  },
];

const destinationsList = [
  {
    'id': 1,
    'description': 'Amsterdam is the capital and most populous city of the Netherlands, with The Hague being the seat of government.',
    'name': 'Amsterdam',
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,100)}`,
        'description': 'Amsterdam parliament building'
      }
    ]
  },
  {
    'id': 2,
    'description': 'New York, often called New York City or NYC, is the most populous city in the United States.',
    'name': 'New-York',
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,100)}`,
        'description': 'New-York parliament building'
      },
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,100)}`,
        'description': 'Paris parliament building'
      }
    ]
  },
  {
    'id': 3,
    'description': 'Paris is the capital and most populous city of France, with an estimated population of 2,165,423 residents in 2019 in an area of more than 105 km².',
    'name': 'Paris',
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,100)}`,
        'description': 'Paris parliament building'
      },
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,100)}`,
        'description': 'Paris parliament building'
      },
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,100)}`,
        'description': 'Paris parliament building'
      }
    ]
  },
  {
    'id': 4,
    'description': 'Bangkok, officially known in Thai as Krung Thep Maha Nakhon and colloquially as Krung Thep, is the capital and most populous city of Thailand.',
    'name': 'Bangkok',
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,100)}`,
        'description': 'Bangkok parliament building'
      },
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,100)}`,
        'description': 'Paris parliament building'
      },
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,100)}`,
        'description': 'Paris parliament building'
      },
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,100)}`,
        'description': 'Paris parliament building'
      },
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,100)}`,
        'description': 'Paris parliament building'
      }
    ]
  },
  {
    'id': 5,
    'description': 'Berlin is the capital and largest city of Germany by both area and population.',
    'name': 'Berlin',
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,100)}`,
        'description': 'Berlin parliament building'
      },
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,100)}`,
        'description': 'Paris parliament building'
      }
    ]
  },
  {
    'id': 6,
    'description': 'Los Angeles is the commercial, financial, and cultural center of Southern California.',
    'name': 'Los Angeles',
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,100)}`,
        'description': 'Los Angeles parliament building'
      },
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,100)}`,
        'description': 'Paris parliament building'
      }
    ]
  },
  {
    'id': 7,
    'description': 'Bangkok, officially known in Thai as Krung Thep Maha Nakhon and colloquially as Krung Thep, is the capital and most populous city of Thailand.',
    'name': 'Bangkok',
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,100)}`,
        'description': 'Bangkok parliament building'
      },
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,100)}`,
        'description': 'Paris parliament building'
      }
    ]
  },
  {
    'id': 8,
    'description': 'Andorra,[g] officially the Principality of Andorra,[1][h] is a sovereign landlocked microstate on the Iberian Peninsula, in the eastern Pyrenees, bordered by France to the north and Spain to the south.',
    'name': 'Andora',
    'pictures': [
    ]
  },
  {
    'id': 9,
    'description': 'Lisbon is the capital and largest city of Portugal, with an estimated population of 544,851 within its administrative limits in an area of 100.05 km2.',
    'name': 'Lisbon',
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,100)}`,
        'description': 'Lisbon parliament building'
      },
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,100)}`,
        'description': 'Paris parliament building'
      }
    ]
  }
];

const offersByType = [
  {
    'type': 'taxi',
    'offers': [{
      'id': 1,
      'title': 'Buy an entire taxi',
      'price': 120
    },
    {
      'id': 2,
      'title': 'Get breakfast to taxi',
      'price': 10
    },
    {
      'id': 3,
      'title': 'Go to spa in taxi',
      'price': 430
    }]
  },
  {
    'type': 'bus',
    'offers': [{
      'id': 1,
      'title': 'Buy an entire bus',
      'price': 120
    },
    {
      'id': 2,
      'title': 'Get breakfast in the bus',
      'price': 10
    },
    {
      'id': 3,
      'title': 'Go to spa in bus',
      'price': 430
    }]
  },
  {
    'type': 'train',
    'offers': [{
      'id': 1,
      'title': 'Buy an entire train',
      'price': 120
    },
    {
      'id': 2,
      'title': 'Get breakfast to train',
      'price': 10
    },
    {
      'id': 3,
      'title': 'Go to toilet in train',
      'price': 430
    }]
  },
  {
    'type': 'ship',
    'offers': [{
      'id': 1,
      'title': 'Buy an entire ship',
      'price': 120
    },
    {
      'id': 2,
      'title': 'Get breakfast to ship',
      'price': 105
    },
    {
      'id': 3,
      'title': 'Go swimming in the sea',
      'price': 430
    }]
  },
  {
    'type': 'drive',
    'offers': [{
      'id': 1,
      'title': 'Buy an entire car',
      'price': 1420
    },
    {
      'id': 2,
      'title': 'Go camping in the car',
      'price': 106
    },
    {
      'id': 3,
      'title': 'Go to spa in taxi',
      'price': 430
    }]
  },
  {
    'type': 'flight',
    'offers': [{
      'id': 1,
      'title': 'Buy an entire plane',
      'price': 120
    },
    {
      'id': 2,
      'title': 'Get breakfast in the sky',
      'price': 10
    },
    {
      'id': 3,
      'title': 'Go to spa in the sky',
      'price': 430
    }]
  },
  {
    'type': 'check-in',
    'offers': [{
      'id': 1,
      'title': 'Buy an entire hotel',
      'price': 120
    },
    {
      'id': 2,
      'title': 'Get breakfast to a room',
      'price': 10
    },
    {
      'id': 3,
      'title': 'Go to spa in hotel',
      'price': 430
    }]
  },
  {
    'type': 'sightseeing',
    'offers': [{
      'id': 1,
      'title': 'Buy an entire mountain',
      'price': 120
    },
    {
      'id': 2,
      'title': 'Get breakfast to an Everest',
      'price': 10
    },
    {
      'id': 3,
      'title': 'Go to spa in hot springs',
      'price': 430
    },
    {
      'id': 4,
      'title': 'Go nowhere',
      'price': 43054
    }]
  },
  {
    'type': 'restaurant',
    'offers': [{
      'id': 1,
      'title': 'Buy an entire restaurant',
      'price': 120
    },
    {
      'id': 2,
      'title': 'Eat crabs',
      'price': 10
    }]
  }
];


// function makeNewTrip (point, info) {
//   const resultArray = point.map((x) => x);

//   for (let i = 0; i < point.length; i++) {
//     for (let j = 0; j < info.length; j++) {
//       if(info[j].id === newData[i].destination) {
//         resultArray[i].destination = info[j];
//       }
//     }
//   }
//   return resultArray;
// }

// const pointsFind = this.#allOffersByType.find((point) => point.id === trip.id)


function getRandomTrip() {

  return getRandomArrayElement(newData);
}

export {getRandomTrip, offersByType, destinationsList};
