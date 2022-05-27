/* eslint-disable */

import { EventType } from '../../../models';
import { EventsList } from './EventsList';

export default {
  title: 'EventsList/EventsList',
};

export const Default = () => <EventsList eventType={EventType.UPCOMING} />;

Default.story = {
  name: 'default',
};
