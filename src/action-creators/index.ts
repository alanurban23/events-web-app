import { Action, Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { EventModel } from '../models';

export interface DispatchEventAction extends Action<ActionType> {
  payload: EventModel;
}

export interface DispatchFavoritesEventAction extends Action<ActionType> {
  payload: EventModel[];
}

export const setEventId = (
  event: EventModel,
  dispatch: Dispatch<DispatchEventAction>,
): DispatchEventAction => dispatch({ type: ActionType.SHOW_EVENT, payload: event });

export const setEventFavorites = (
  events: EventModel[],
  dispatch: Dispatch<DispatchFavoritesEventAction>,
): DispatchFavoritesEventAction =>
  dispatch({ type: ActionType.SET_EVENT_FAVORITES, payload: events });
