import createReducers from '../../../store/createPageReducer';
import {loginRequest} from './loginRequest';

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

export {Creators, reducers, sagas};
