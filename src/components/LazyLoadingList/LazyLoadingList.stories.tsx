/* eslint-disable */
import { LazyLoadingList } from './LazyLoadingList';

export default {
  title: 'LazyLoadingList',
};

export const Default = () => (
  <LazyLoadingList data={undefined} setPageNumberState={undefined} pageNumberState={0} />
);

Default.story = {
  name: 'default',
};
