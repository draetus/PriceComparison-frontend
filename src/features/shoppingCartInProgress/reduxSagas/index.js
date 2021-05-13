import createReducers from '../../../store/createPageReducer';
// import {updateShoppingCartRequest} from "./updateShoppingCartRequest";
import {put, call} from 'redux-saga/effects';

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

function* updateShoppingCartRequest({products}) {
  console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
  yield put(Creators.updateShoppingCartSuccess());
}


export {Creators, reducers, sagas};
