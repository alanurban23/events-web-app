import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { LikeButton } from './LikeButton';
import { EventEmptyModel } from '../../../mocks/EventEmptyModel';
import { store } from '../../../store';

describe('<LikeButton />', () => {
  test('it should mount', () => {
    render(
      <Provider store={store}>
        <LikeButton item={EventEmptyModel} />
      </Provider>,
    );
    const likeButton = screen.getByTestId('LikeButton');

    expect(likeButton).toBeInTheDocument();
  });
});
