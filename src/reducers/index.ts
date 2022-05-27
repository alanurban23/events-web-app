import { combineReducers } from 'redux';
import eventReducer from './eventReducer';

const reducers = combineReducers({
  event: eventReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
