import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataFailure, fetchDataSuccess } from './actions';
import { FETCH_DATA_REQUEST } from './Constants';

//this is for fetching data from the API,
function* fetchDataSaga() {
  try {
    const response = yield axios.get('https://admin.naxa.com.np/api/services');
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}
//yield takelatest for single and all for multiple actions
export default function* mySaga() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}
