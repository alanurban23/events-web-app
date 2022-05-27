/* eslint-disable */

import { Notification } from '..';

export default {
  title: 'Notifications',
};

export const Default = () => (
  <Notification message={''} type={'error'} open={false} vertical={''} horizontal={''} />
);

Default.story = {
  name: 'default',
};
