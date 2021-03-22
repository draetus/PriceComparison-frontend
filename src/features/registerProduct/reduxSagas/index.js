import createReducers from '../../../store/createPageReducer';
import checkIfExistsRequest from './checkIfExistsRequest';
import saveProductRequest from "./saveProductRequest";

const {Creators, reducers, sagas} = createReducers(
  [
    {
      name: 'checkIfExistsRequest',
      params: ['barCode'],
      function: (state) => ({...state, isFetching: true}),
      sagaFunction: checkIfExistsRequest,
    },
    {
      name: 'checkIfExistsSuccess',
      params: ['exists'],
      function: (state, {exists}) => ({
        ...state,
        isFetching: false,
        exists
      })
    },
    {
      name: 'checkIfExistsFailure',
      function: (state) => ({
        ...state, 
        isFetching: false,
        exists: null
      }),
    },
    {
      name: 'saveProductRequest',
      params: ['name', 'barCode'],
      function: (state) => ({...state, isFetching: true}),
      sagaFunction: saveProductRequest,
    },
    {
      name: 'saveProductSuccess',
      function: (state) => ({
        ...state,
        isFetching: false,
      })
    },
    {
      name: 'saveProductFailure',
      function: (state) => ({...state, isFetching: false}),
    },
  ],
  {
    isFetching: false,
    exists: null,
  },
);

export {Creators, reducers, sagas};
