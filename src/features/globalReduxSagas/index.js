import createReducers from '../../store/createPageReducer';
import {logoutFunction} from './logoutFunction';

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
      sagaFunction: logoutFunction,
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

export {Creators, reducers, sagas};
