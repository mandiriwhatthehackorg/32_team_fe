import { takeLatest, all } from 'redux-saga/effects';

import { TYPE_GET_LATEST_RATE, TYPE_GET_DIALOGFLOW, TYPE_FETCH_MANDIRI } from '../actions';
import { fetchLatestRate } from './rate';
import { fetchDialogflow } from './dialogflow';
import { fetchMandiri } from './mandiri';

const root = function* root() {
  yield all([
    takeLatest(TYPE_GET_LATEST_RATE, fetchLatestRate),
    takeLatest(TYPE_GET_DIALOGFLOW, fetchDialogflow),
    takeLatest(TYPE_FETCH_MANDIRI, fetchMandiri),
  ]);
};

export default root;
