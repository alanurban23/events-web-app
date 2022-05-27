/* eslint-disable */
import { EventEmptyModel } from '../../mocks/EventEmptyModel';
import CardBox from './CardBox';

export default {
  title: 'Card',
};

export const Default = () => <CardBox event={EventEmptyModel} />;

Default.story = {
  name: 'default',
};
