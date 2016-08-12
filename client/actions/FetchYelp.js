import axios from 'axios';

export const FETCH_YELP = 'FETCH_YELP';

export function FetchYelp() {
  const url = '/API/yelp';
  const request = axios.get(url, { params: { truckName: 'CurryUpNow' } });
  return {
    type: FETCH_YELP,
    payload: request,
  };
}
