import { EventModel, EventType } from '../models';
import { getFormattedCurrentDate } from '.';

const actualDate = getFormattedCurrentDate;

interface EventParameters {
  startDateTime?: string;
  endDateTime?: string;
  startEndDateTime?: string;
}

const getParametersByEventType = (eventType: EventType): EventParameters => {
  if (eventType === EventType.UPCOMING) {
    return { startDateTime: actualDate };
  }

  if (eventType === EventType.PAST) {
    return { endDateTime: actualDate };
  }

  if (eventType === EventType.PENDING) {
    return { startEndDateTime: actualDate };
  }

  return {};
};

const concatArrays = (...args: EventModel[]): EventModel[] => args.flat();

const getEventPath = (eventType: EventType): string => `/events/${eventType}`;

export { getParametersByEventType, getEventPath, concatArrays };
