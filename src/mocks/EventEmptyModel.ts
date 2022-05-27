import { EventModel } from '../models';

const EventEmptyModel: EventModel = {
  id: 'vvG1HZpRndBscg',
  url: 'https://www.ticketmaster.com/philadelphia-76ers-vs-brooklyn-nets-philadelphia-pennsylvania-03-10-2022/event/02005B0DF22F7365',
  name: 'Test',
  info: 'Footprint Center is now a cashless environment. Please plan on using Visa, Mastercard, American Express or Discover during your visit. Or have your cash converted onto a PayPal preloaded Mastercard at the ticket counter at no charge. There is an 6 ticket limit. To purchase more than 6 tickets, please call 602.379.SUNS to find out about group tickets.',
  images: [
    {
      url: 'https://s1.ticketm.net/dam/a/634/439a967d-b741-4a5b-9431-e877d8027634_1339741_RETINA_LANDSCAPE_16_9.jpg',
    },
  ],
  dates: {
    start: {
      localDate: '2022-04-08',
      localTime: '19:00:00',
    },
  },
  _embedded: {
    venues: [
      {
        name: 'Moda Center',
        city: {
          name: 'Portland',
        },
        address: {
          line1: '1111 S. Figueroa St.',
        },
        country: {
          name: 'United States Of America',
        },
        postalCode: '90017',
      },
    ],
  },
  priceRanges: [
    {
      currency: 'USD',
      min: 20,
      max: 1900,
    },
  ],
};

const EventsMock: EventModel[] = [
  {
    id: 'vvG1HZpRndBscg',
    url: 'https://www.ticketmaster.com/philadelphia-76ers-vs-brooklyn-nets-philadelphia-pennsylvania-03-10-2022/event/02005B0DF22F7365',
    name: 'Test',
    info: 'Footprint Center is now a cashless environment. Please plan on using Visa, Mastercard, American Express or Discover during your visit. Or have your cash converted onto a PayPal preloaded Mastercard at the ticket counter at no charge. There is an 6 ticket limit. To purchase more than 6 tickets, please call 602.379.SUNS to find out about group tickets.',
    images: [
      {
        url: 'https://s1.ticketm.net/dam/a/634/439a967d-b741-4a5b-9431-e877d8027634_1339741_RETINA_LANDSCAPE_16_9.jpg',
      },
    ],
    dates: {
      start: {
        localDate: '2022-04-08',
        localTime: '19:00:00',
      },
    },
    _embedded: {
      venues: [
        {
          name: 'Moda Center',
          city: {
            name: 'Portland',
          },
          address: {
            line1: '1111 S. Figueroa St.',
          },
          country: {
            name: 'United States Of America',
          },
          postalCode: '90017',
        },
      ],
    },
    priceRanges: [
      {
        currency: 'USD',
        min: 20,
        max: 1900,
      },
    ],
  },
  {
    id: 'vvG1HZpRndBscg',
    url: 'https://www.ticketmaster.com/philadelphia-76ers-vs-brooklyn-nets-philadelphia-pennsylvania-03-10-2022/event/02005B0DF22F7365',
    name: 'Test2',
    info: 'Footprint Center is now a cashless environment. Please plan on using Visa, Mastercard, American Express or Discover during your visit. Or have your cash converted onto a PayPal preloaded Mastercard at the ticket counter at no charge. There is an 6 ticket limit. To purchase more than 6 tickets, please call 602.379.SUNS to find out about group tickets.',
    images: [
      {
        url: 'https://s1.ticketm.net/dam/a/634/439a967d-b741-4a5b-9431-e877d8027634_1339741_RETINA_LANDSCAPE_16_9.jpg',
      },
    ],
    dates: {
      start: {
        localDate: '2022-04-08',
        localTime: '19:00:00',
      },
    },
    _embedded: {
      venues: [
        {
          name: 'Moda Center',
          city: {
            name: 'Portland',
          },
          address: {
            line1: '1111 S. Figueroa St.',
          },
          country: {
            name: 'United States Of America',
          },
          postalCode: '90017',
        },
      ],
    },
    priceRanges: [
      {
        currency: 'USD',
        min: 20,
        max: 1900,
      },
    ],
  },
];

export { EventEmptyModel, EventsMock };
