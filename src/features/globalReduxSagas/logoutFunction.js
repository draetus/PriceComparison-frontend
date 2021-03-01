import {call} from 'redux-saga/effects';
import {LocalStorage} from '../../lib';

export default function* logoutRequest() {
  yield call(LocalStorage.removeItem, 'token');
  yield call(LocalStorage.removeItem, 'password');
}
