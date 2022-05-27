/* eslint-disable */
import { EventEmptyModel } from '../../../mocks/EventEmptyModel';
import { LikeButton } from './LikeButton';

export default {
  title: 'LikeButton',
};

export const Default = () => <LikeButton item={EventEmptyModel} />;

Default.story = {
  name: 'default',
};
