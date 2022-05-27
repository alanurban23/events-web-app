/* eslint-disable */
import { EventType } from '../../../models/Event/Event.type';
import EventsBox from './EventsBox';

export default {
  title: 'EventsBox',
};

export const Default = () => <EventsBox eventType={EventType.UPCOMING} />;

Default.story = {
  name: 'default',
};
