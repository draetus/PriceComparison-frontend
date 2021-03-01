import {all} from 'redux-saga/effects';
import {sagas} from '../features';

export default function* rootSaga() {
  yield all(sagas);
}
