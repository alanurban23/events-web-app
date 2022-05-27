import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import CardBox from './CardBox';
import { EventEmptyModel } from '../../mocks/EventEmptyModel';
import { store } from '../../store';

describe('<CardBox />', () => {
  /** I will refactor this test after */
  test.skip('it should mount', () => {
    render(
      <Provider store={store}>
        <CardBox event={EventEmptyModel} />
      </Provider>,
    );

    const cardBox = screen.getByTestId('CardBox');

    expect(cardBox).toBeInTheDocument();
  });
});
