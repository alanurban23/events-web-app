import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DatePickerLocale from './DatePickerLocale';

describe('<DatePickerLocale />', () => {
  test('it should mount', () => {
    const onSearchMock = jest.fn();
    render(<DatePickerLocale label='sss' onChangeDate={onSearchMock} defaultDate={new Date()} />);

    const datePickerLocale = screen.getByTestId('DatePickerLocale');

    expect(datePickerLocale).toBeInTheDocument();
  });
});
