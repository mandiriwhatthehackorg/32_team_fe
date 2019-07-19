import { put } from 'redux-saga/effects';
import mandiri from './api/mandiri';
import {
    TYPE_SET_MANDIRI
} from '../actions';

export function* fetchMandiri(action) {
    try {
        if (action.payload.value.api.method == "POST") {
            let mandiriData = yield mandiri.postMandiri(action.payload.value);
            if (!mandiriData) {
                // throw false
            } else {
                yield put({ type: TYPE_SET_MANDIRI, payload: { value: mandiriData } })
            }
        } else {
            let mandiriData = yield mandiri.getMandiri(action.payload.value);
            if (!mandiriData) {
                // throw false
            } else {
                yield put({ type: TYPE_SET_MANDIRI, payload: { value: mandiriData } })
            }
        }
    } catch (error) { }
}
