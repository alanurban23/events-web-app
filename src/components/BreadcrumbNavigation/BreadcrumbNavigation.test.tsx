import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { BreadcrumbNavigation } from './BreadcrumbNavigation';
import { Router } from '../../routes';

describe('<Path />', () => {
  test('it should mount', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <BreadcrumbNavigation lastPath='' />
      </Router>,
    );

    const breadcrumbNavigation = screen.getByTestId('BreadcrumbNavigation');

    expect(breadcrumbNavigation).toBeInTheDocument();
  });
});
