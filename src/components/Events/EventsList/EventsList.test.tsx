import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { EventsList } from './EventsList';
import { EventType } from '../../../models';

describe('<EventsList />', () => {
  test('it should mount', () => {
    render(<EventsList eventType={EventType.UPCOMING} />);

    const eventsListEventsList = screen.getByTestId('EventsList');

    expect(eventsListEventsList).toBeInTheDocument();
  });
});
