import createReducers from '../../../store/createPageReducer';
// import {searchProductsRequest} from './searchProductsRequest';
// import {searchSingleProductRequest} from './searchSingleProductRequest';
import {put, call} from 'redux-saga/effects';

import {api} from '../../../services';

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
    },
    {
      name: 'searchSingleProductRequest',
      params: ['barcode', 'lat', 'lon'],
      function: (state) => ({...state, isFetchingSingleProduct: true}),
      sagaFunction: searchSingleProductRequest,
    },
    {
      name: 'searchSingleProductSuccess',
      params: ['singleProduct'],
      function: (state, {singleProduct}) => ({
        ...state,
        isFetchingSingleProduct: false,
        singleProduct: singleProduct
      }),
    },
    {
      name: 'searchSingleProductFailure',
      function: (state) => ({
          ...state, 
          isFetchingSingleProduct: false
        }),
    },
    {
      name: 'clearSingleProduct',
      function: (state) => ({
          ...state, 
          singleProduct: null
        }),
    }
  ],
  {
    isFetching: false,
    isFetchingSingleProduct: false,
    products: [],
    singleProduct: null
  },
);

function* searchProductsRequest({name}) {
  try {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    const response = yield call(api.searchProducts, name);
    yield put(Creators.searchProductsSuccess(response.data));
  } catch (response) {
    yield put(Creators.searchProductsFailure());
  }
}

function* searchSingleProductRequest({barcode, lat, lon}) {
  try {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    const response = yield call(api.searchProduct, barcode, lat, lon);
    yield put(Creators.searchSingleProductSuccess(response.data));
  } catch (response) {
    yield put(Creators.searchSingleProductFailure());
  }
}

export {Creators, reducers, sagas};
