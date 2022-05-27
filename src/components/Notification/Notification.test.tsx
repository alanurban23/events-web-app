import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Notification } from './Notification';

describe('<Notification />', () => {
  test('it should mount', () => {
    render(<Notification message='' type='error' open={false} vertical='' horizontal='' />);

    const notification = screen.getByTestId('Notification');

    expect(notification).toBeInTheDocument();
  });
});
