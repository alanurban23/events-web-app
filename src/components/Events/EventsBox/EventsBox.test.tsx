import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EventsBox from './EventsBox';
import { EventType } from '../../../models/Event/Event.type';

describe('<EventsBox />', () => {
  test('it should mount', () => {
    render(<EventsBox eventType={EventType.UPCOMING} />);

    const eventsBox = screen.getByTestId('EventsBox');

    expect(eventsBox).toBeInTheDocument();
  });
});
