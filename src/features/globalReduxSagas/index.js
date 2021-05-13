import createReducers from '../../store/createPageReducer';
// import {logoutFunction} from './logoutFunction';
import {call} from 'redux-saga/effects';
import {LocalStorage} from '../../lib';

const {Creators, reducers, sagas} = createReducers(
  [
    {
      name: 'globalLoggedIn',
      function: (state) => ({...state, isLoggedIn: true}),
    },
    {
      name: 'globalLogout',
      function: (state) => ({
        ...state,
        isLoggedIn: false,
      }),
      sagaFunction: logoutRequest,
    },
    {
      name: 'setUserInfos',
      params: ['userInfos'],
      function(state, {userInfos}) {
        return {...state, userInfos};
      },
    },
  ],
  {
    isLoggedIn: false,
    userInfos: null,
  },
);

function* logoutRequest() {
  yield call(LocalStorage.removeItem, 'token');
  yield call(LocalStorage.removeItem, 'password');
}


export {Creators, reducers, sagas};
