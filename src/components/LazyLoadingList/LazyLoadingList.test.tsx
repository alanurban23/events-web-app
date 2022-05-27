import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { LazyLoadingList } from './LazyLoadingList';

describe('<LazyLoadingList />', () => {
  test('it should mount', () => {
    render(<LazyLoadingList data={undefined} setPageNumberState={undefined} pageNumberState={0} />);

    const lazyLoadingScroll = screen.getByTestId('LazyLoadingList');

    expect(lazyLoadingScroll).toBeInTheDocument();
  });
});
