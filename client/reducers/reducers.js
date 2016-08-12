// Combines all of the reducers in order to pass them to the store

import { combineReducers } from 'redux';
import TruckReducer from './reducer_TruckList';
import TruckViewReducer from './reducer_TruckView';

const rootReducer = combineReducers({
  trucks: TruckReducer,
  yelpInfo: TruckViewReducer,
});

export default rootReducer;
