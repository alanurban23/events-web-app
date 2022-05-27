import { EventModel } from '.';

export interface EventsModel {
  _embedded: {
    events: EventModel[];
  };
}

export interface EventsData {
  events?: EventModel[];
  error?: string;
}
