import { ActionType } from '../action-types';
import { EventActionPayload, EventActionType } from '../actions';

const eventReducer = (state: any = null, action: EventActionType): EventActionPayload => {
  switch (action.type) {
    case ActionType.SHOW_EVENT:
    case ActionType.SET_EVENT_FAVORITES:
      return action.payload;
    default:
      return state;
  }
};

export default eventReducer;
