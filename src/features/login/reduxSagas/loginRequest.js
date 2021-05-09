import {put, call} from 'redux-saga/effects';

import {Creators} from '.';
import {Creators as GlobalCreators} from '../../globalReduxSagas';

import {api} from '../../../services';

export function* loginRequest({username, password}) {
  // TODO login mockado
  try {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    const response = yield call(api.login, {username, password});
    yield put(Creators.loginSuccess());
    yield put(GlobalCreators.setUserInfos(response.data));
    yield put(GlobalCreators.globalLoggedIn());
  } catch (response) {
    yield put(Creators.loginFailure());
  }
}
