import { RouteConfig } from 'react-router-config';
import { INITIALIZE_PAGE_NUMBER, SIZE_IN_PAGE } from '../utils';
import { Event, EventsList, EventsSection, RenderRoutes } from '../components';
import { EventType } from '../models';
import LikeList from '../components/Like/LikeList/LikeList';

/**
 * component: EventsSection will be changed to HomeComponent in the future or in the other MR
 */
export const ROUTES: RouteConfig[] = [
  {
    path: ['/', '/events'],
    exact: false,
    key: 'EVENTS',
    component: (props: RouteConfig) => <RenderRoutes {...props} />,
    routes: [
      {
        path: ['/', '/events'],
        key: 'EVENTS_ROOT',
        exact: true,
        component: EventsSection,
      },
      {
        path: ['/events/liked'],
        key: 'EVENTS_LIKED',
        exact: true,
        component: LikeList,
      },
      {
        path: '/events/upcoming',
        exact: false,
        key: 'EVENTS_UPCOMING_ROOT',
        component: (props: RouteConfig) => <RenderRoutes {...props} />,
        routes: [
          {
            path: '/events/upcoming',
            exact: true,
            component: () => (
              <EventsList
                eventType={EventType.UPCOMING}
                size={SIZE_IN_PAGE}
                page={INITIALIZE_PAGE_NUMBER}
              />
            ),
          },
          {
            path: '/events/upcoming/:id',
            exact: true,
            component: () => <Event />,
          },
        ],
      },
    ],
  },
];
