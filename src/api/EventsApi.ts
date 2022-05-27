import { AxiosInit } from './AxiosInit';
import { getEnv, objectToQueryString } from '../utils/helpers';
import { EventModel, EventsModel } from '../models';

export default class EventsApi {
  getEvents = async (parameters?: Record<string, unknown> | undefined): Promise<EventModel[]> => {
    const fetchUrl: string = getEnv('API_TYPE') || 'events';
    const apiKey = getEnv('API_KEY');

    let parametersQuery: string;
    let urlWithParameters: string;

    if (parameters) {
      parametersQuery = objectToQueryString(parameters);
      urlWithParameters = `${fetchUrl}?apikey=${apiKey}${parametersQuery}`;

      return AxiosInit.get<EventsModel>(urlWithParameters).then(
        (response) => response.data._embedded.events,
      );
    }

    return AxiosInit.get(fetchUrl);
  };
}
