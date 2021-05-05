import createReducers from '../../../store/createPageReducer';
import searchProductsRequest from './searchProductsRequest';

const {Creators, reducers, sagas} = createReducers(
  [
    {
      name: 'searchProductsRequest',
      params: ['name'],
      function: (state) => ({...state, isFetching: true}),
      sagaFunction: searchProductsRequest,
    },
    {
      name: 'searchProductsSuccess',
      params: ['products'],
      function: (state, {products}) => ({
        ...state,
        isFetching: false,
        products: products
      }),
    },
    {
      name: 'searchProductsFailure',
      function: (state) => ({
          ...state, 
          isFetching: false
        }),
    }
  ],
  {
    isFetching: false,
    products: []
  },
);

export {Creators, reducers, sagas};
