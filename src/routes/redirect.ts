import { History } from 'history';

type RouteTypePath = keyof typeof RoutePaths;

export enum RoutePaths {
  EVENTS = 'events',
  EVENTS_UPCOMING = 'events/upcoming',
}

export const redirectToWithId = (
  history: History<unknown>,
  path: RouteTypePath,
  id?: string | number,
): void => {
  history.push(`${path}/${id}`);
};

export const redirectTo = (history: History<unknown>, path: RouteTypePath): void => {
  history.push(`${path}`);
};

export const getRouteType = (path: string): RouteTypePath => path as keyof typeof RoutePaths;
