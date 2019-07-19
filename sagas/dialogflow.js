import { put } from 'redux-saga/effects';
import dialogflow from './api/dialogflow';
import {
  TYPE_SET_DIALOGFLOW
} from '../actions';

export function* fetchDialogflow(action) {
  try {
    let dialogflowData = yield dialogflow.postQuery(action.payload.value);
    if (!dialogflowData) {
      // throw false
    } else {
      yield put({ type: TYPE_SET_DIALOGFLOW, payload: { value: dialogflowData } })
    }
  } catch (error) {}
}