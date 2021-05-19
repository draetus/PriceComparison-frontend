import createReducers from '../../../store/createPageReducer';
// import {loginRequest} from './loginRequest';
import {put, call} from 'redux-saga/effects';

import {Creators as GlobalCreators} from '../../globalReduxSagas';

import {api} from '../../../services';

const {Creators, reducers, sagas} = createReducers(
  [
    {
      name: 'loginRequest',
      params: ['username', 'password'],
      function: (state) => ({...state, isFetching: true}),
      sagaFunction: loginRequest,
    },
    {
      name: 'loginSuccess',
      function: (state) => ({
        ...state,
        isFetching: false,
      }),
    },
    {
      name: 'loginFailure',
      function: (state) => ({...state, isFetching: false}),
    },
  ],
  {
    isFetching: false,
  },
);

function* loginRequest({username, password}) {
  // TODO login mockado
  try {
    const response = yield call(api.login, {username, password});
    yield put(Creators.loginSuccess());
    yield put(GlobalCreators.setUserInfos(response.data));
    yield put(GlobalCreators.globalLoggedIn());
  } catch (response) {
    yield put(Creators.loginFailure());
  }
}

export {Creators, reducers, sagas};