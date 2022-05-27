import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Event } from './Event';
import { store } from '../../store';
import { Router } from '../../routes';

describe('<Event />', () => {
  test('it should mount', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <Router history={history}>
          <Event />
        </Router>
        ,
      </Provider>,
    );
    const event = screen.getByTestId('Event');

    expect(event).toBeInTheDocument();
  });
});
