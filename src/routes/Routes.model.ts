import { RouteProps } from '.';

interface RoutesParams {
  routes: RouteProps[];
}

interface ParentRoute extends RouteProps {
  key: string;
  routes?: RouteProps[];
  component?: any;
}

export type { RoutesParams, ParentRoute };
