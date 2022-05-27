import { RouteConfig } from 'react-router-config';
import { ParentRoute } from '../../../models';
import { Route, RouteProps, Switch } from '../../../routes';
import { generateRandomString, useTranslation } from '../../../utils';

const RenderRouteWithSubRoutes = (route: ParentRoute): JSX.Element => {
  const { path, exact, routes } = route;

  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => <route.component key={route.key} {...props} routes={routes} />}
    />
  );
};

export const RenderRoutes = (params: RouteConfig): JSX.Element => {
  const { routes } = params;
  const { t } = useTranslation();

  return (
    <div data-testid='RenderRoutes'>
      <Switch>
        {routes &&
          routes.map((route: RouteProps) => (
            <RenderRouteWithSubRoutes key={generateRandomString()} {...route} />
          ))}
        <Route component={() => <h1>${t('notFound')}</h1>} />
      </Switch>
    </div>
  );
};
