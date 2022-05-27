import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Image } from './Image';

describe('<Image />', () => {
  test('it should mount', () => {
    render(<Image />);

    const image = screen.getByTestId('Image');

    expect(image).toBeInTheDocument();
  });
});
