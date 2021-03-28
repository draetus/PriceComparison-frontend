import createReducers from '../../../store/createPageReducer';
import searchProductRequest from './searchProductRequest';

const {Creators, reducers, sagas} = createReducers(
  [
    {
      name: 'searchProductRequest',
      params: ['barCode'],
      function: (state) => ({...state, isFetching: true}),
      sagaFunction: searchProductRequest,
    },
    {
      name: 'searchProductSuccess',
      params: ['data'],
      function: (state, {data}) => ({
        ...state,
        isFetching: false,
        data
      }),
    },
    {
      name: 'searchProductFailure',
      function: (state) => ({
          ...state, 
          isFetching: false,
          data: null
        }),
    },
    {
      name: 'clearData',
      function: (state) => ({
          ...state, 
          isFetching: false,
          data: null
        }),
    },
  ],
  {
    isFetching: false,
    data: null
  },
);

export {Creators, reducers, sagas};
