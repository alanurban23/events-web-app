import { EventType } from '..';
import { PaginationParameters } from '../Pagination';

interface Image {
  url: string;
}

interface VenueAddress {
  line1: string;
}

interface VenueCountry {
  name: string;
}

interface Price {
  currency: string;
  min: number;
  max: number;
}

interface Dates {
  start: {
    localDate: string;
    localTime: string;
  };
}

interface Venue {
  name: string;
  city: {
    name: string;
  };
  address: VenueAddress;
  country: VenueCountry;
  postalCode: string;
}

type Images = Image[];
type Venues = Venue[];

interface EventProps extends PaginationParameters {
  eventType: EventType;
}

interface EventModel {
  id: string;
  url: string;
  name: string;
  images: Images;
  dates: Dates;
  priceRanges: Price[];
  _embedded: {
    venues: Venues;
  };
  info: string;
}

export type { EventProps, EventModel };
