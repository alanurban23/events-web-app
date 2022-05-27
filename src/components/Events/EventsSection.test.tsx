import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { EventsSection } from './EventsSection';

describe('<Events />', () => {
  test('it should mount', () => {
    render(<EventsSection />);

    const eventsSection = screen.getByTestId('EventsSection');

    expect(eventsSection).toBeInTheDocument();
  });
});
