import {put, call} from 'redux-saga/effects';

import {Creators} from '.';
import {Creators as GlobalCreators} from '../../globalReduxSagas';

import {api} from '../../../services';
import {LocalStorage} from '../../../lib';

export default function* loginRequest({username, password}) {
  // TODO login mockado
  try {
    const response = yield call(api.login, {username, password});
    // yield handleLoginPersis(credentials);
    yield put(Creators.loginSuccess());
    yield put(GlobalCreators.setUserInfos(response.data));
    yield put(GlobalCreators.globalLoggedIn());
  } catch (response) {
    // const errorResponse = new ResponseError(response);
    // errorResponse.alertMessage();
    yield put(Creators.loginFailure());
  }
}

// async function handleLoginPersis(username, password) {
//   await LocalStorage.setItem('username', username);
//   await LocalStorage.setItem('password', password);
// }
