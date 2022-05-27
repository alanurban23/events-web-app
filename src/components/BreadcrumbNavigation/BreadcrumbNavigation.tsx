import { Link as RouterLink } from 'react-router-dom';
import { FC } from 'react';
import { upperFirst } from 'lodash';
import { Container, Typography, Breadcrumbs } from '../../material-ui';
import { getRouteType, redirectTo, useHistory, useLocation } from '../../routes';

interface BreadcrumbNavigationProps {
  lastPath: string;
}

export const BreadcrumbNavigation: FC<BreadcrumbNavigationProps> = ({ lastPath }) => {
  const history = useHistory();
  const location = useLocation() || {};
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div data-testid='BreadcrumbNavigation'>
      <Container maxWidth='lg'>
        <Breadcrumbs aria-label='Breadcrumb'>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            return last ? (
              <Typography color='textPrimary' key={to}>
                {lastPath}
              </Typography>
            ) : (
              <RouterLink
                color='inherit'
                to={to}
                key={to}
                onClick={() => redirectTo(history, getRouteType(to))}
              >
                {upperFirst(value)}
              </RouterLink>
            );
          })}
        </Breadcrumbs>
      </Container>
    </div>
  );
};
