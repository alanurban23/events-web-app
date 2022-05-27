import { ReactElement } from 'react';
import DatePickerLocale from './DatePickerLocale';

export default {
  title: 'DatePickerLocale',
};

export const Default = (): ReactElement => (
  <DatePickerLocale label='' defaultDate={new Date()} onChangeDate={undefined} />
);

Default.story = {
  name: 'default',
};
