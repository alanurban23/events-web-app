import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import LikeList from './LikeList';
import { store } from '../../../store';

describe('<LikeList />', () => {
  xtest('it should mount', () => {
    render(
      <Provider store={store}>
        <LikeList />
      </Provider>,
    );

    const likeList = screen.getByTestId('LikeList');

    expect(likeList).toBeInTheDocument();
  });
});
