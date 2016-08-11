import { FETCH_YELP } from '../actions/FetchYelp';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_YELP:
      console.log('CASE: FETCH YELP')
      return [action.payload.data];
    default:
      return state;
  }
}
