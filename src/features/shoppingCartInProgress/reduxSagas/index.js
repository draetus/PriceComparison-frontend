import createReducers from '../../../store/createPageReducer';
import updateShoppingCartRequest from "./updateShoppingCartRequest";

const {Creators, reducers, sagas} = createReducers(
  [
    {
      name: 'updateShoppingCart',
      params: ['products'],
      function: (state, {products}) => ({
          ...state, 
          products: products,
          isFetching: true
        }),
      sagaFunction: updateShoppingCartRequest,
    },
    {
      name: 'updateShoppingCartSuccess',
      function: (state) => ({
          ...state, 
          isFetching: false
        }),
    },
    {
      name: 'clearShoppingCart',
      function: (state) => ({
        ...state,
        products: []
      }),
    }
  ],
  {
    products: [],
    isFetching: false,
  },
);

export {Creators, reducers, sagas};
