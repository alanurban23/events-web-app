import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { RenderRoutes } from './RenderRoutes';
import { ROUTES } from '../../../routes/routes';

describe('<RenderRoutes />', () => {
  test('it should mount', () => {
    render(
      <Router>
        <RenderRoutes routes={ROUTES} />
      </Router>,
    );

    const renderRoutes = screen.getAllByTestId('RenderRoutes')[0];

    expect(renderRoutes).toBeInTheDocument();
  });
});
