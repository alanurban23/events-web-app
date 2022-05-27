export interface EventModel {
  title: string;
  address: string;
  photos: [];
  price: number;
  date: Date;
  relatedEvent: Event[];
  description: string;
}
