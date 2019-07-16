import { put } from 'redux-saga/effects';
import rate from './api/rate';
import {
  TYPE_SET_LATEST_RATE
} from '../actions';

export function* fetchLatestRate(action) {
  try {
    let latestRate = yield rate.getLatestRate(action.payload.value);
    if (!latestRate) {
      // throw false
    } else {
      yield put({ type: TYPE_SET_LATEST_RATE, payload: { value: latestRate } })
    }
  } catch (error) {}
}