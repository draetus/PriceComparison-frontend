import createReducers from '../../../store/createPageReducer';
import searchProductRequest from './searchProductRequest';

const {Creators, reducers, sagas} = createReducers(
  [
    {
      name: 'searchProductRequest',
      params: ['barcode'],
      function: (state) => ({...state, isFetching: true}),
      sagaFunction: searchProductRequest,
    },
    {
      name: 'searchProductSuccess',
      function: (state) => ({
        ...state,
        isFetching: false
      }),
    },
    {
      name: 'searchProductFailure',
      function: (state) => ({
          ...state, 
          isFetching: false
        }),
    }
  ],
  {
    isFetching: false
  },
);

export {Creators, reducers, sagas};
