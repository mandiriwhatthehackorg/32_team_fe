import { takeLatest, all } from 'redux-saga/effects';

import {
  TYPE_GET_LATEST_RATE
} from '../actions';

import {
  fetchLatestRate
} from './rate';


const root = function* root() {
  yield all([
    takeLatest(TYPE_GET_LATEST_RATE, fetchLatestRate),
  ]);
};

export default root;
