import {put, call} from 'redux-saga/effects';

import {Creators} from '.';
import {Creators as GlobalCreators} from '../../globalReduxSagas';

import {api} from '../../../services';

export default function* loginRequest({username, password}) {
  // TODO login mockado
  try {
    console.log("LOGIN CREATORS: ", Creators);
    const response = yield call(api.login, {username, password});
    console.log("LOGIN SUCCESS: ", response);
    yield put(Creators.loginSuccess());
    yield put(GlobalCreators.setUserInfos(response.data));
    yield put(GlobalCreators.globalLoggedIn());
  } catch (response) {
    console.log("LOGIN FAILURE: ", response);
    yield put(Creators.loginFailure());
  }
}
