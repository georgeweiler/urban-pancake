// Uses data provided by the FetchTrucks action to update the state
import { FETCH_TRUCKS } from '../actions/FetchTrucks';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_TRUCKS:
      return [...action.payload.data];
    default:
      return state;
  }
}
