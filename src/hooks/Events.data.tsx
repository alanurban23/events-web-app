import { useEffect, useState } from 'react';
import EventsApi from '../api/EventsApi';
import { EventModel, EventProps, EventsData } from '../models';
import { getParametersByEventType } from '../utils/Event';
import { removeAllUndefinedProperties } from '../utils';

export const useEventsData = (props: EventProps): EventsData => {
  const { eventType, page, size } = props;

  const [events, setEvents] = useState<EventModel[]>();
  const [error, setError] = useState('');
  const [queryParameters, setQueryParameters] = useState({});

  useEffect(() => {
    const eventTypeParameters = getParametersByEventType(eventType);
    const paginationParameters = removeAllUndefinedProperties({ size, page });

    setQueryParameters({ ...eventTypeParameters, ...paginationParameters });
  }, [eventType, page, size]);

  useEffect(() => {
    /** @todo @param startDateTime this param will be functional in other feature */

    if (Object.entries(queryParameters).length) {
      new EventsApi()
        .getEvents({ ...queryParameters })
        .then((res) => {
          setEvents(res);
        })
        .catch((err) => {
          setError(err);
        });
    }
  }, [queryParameters]);

  return { events, error };
};
