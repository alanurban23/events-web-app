interface EventPhoto {
  url: string;
}

export interface EventDetailsModel {
  title: string;
  address: string;
  photos: EventPhoto[];
  price: number;
  date: Date;
  relatedEvent: Event[];
  description: string;
}
