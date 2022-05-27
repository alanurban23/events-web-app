import { ActionType } from '../action-types';
import { EventModel } from '../models';

export type EventActionPayload = string | EventModel[];

export interface EventActionType {
  type: ActionType;
  payload: EventActionPayload;
}
