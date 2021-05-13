import createReducers from '../../../store/createPageReducer';
// import {saveProductRequest} from "./saveProductRequest";
// import {savePriceProductRequest} from "./savePriceProductRequest";
import {put, call} from 'redux-saga/effects';

import {api} from '../../../services';

const {Creators, reducers, sagas} = createReducers(
  [
    {
      name: 'saveProductRequest',
      params: ['name', 'barcode'],
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
    {
      name: 'savePriceProductRequest',
      params: ['price', 'barcode', 'latitude', 'longitude'],
      function: (state) => ({...state, isFetchingPrice: true}),
      sagaFunction: savePriceProductRequest,
    },
    {
      name: 'savePriceProductSuccess',
      function: (state) => ({
        ...state,
        isFetchingPrice: false,
      })
    },
    {
      name: 'savePriceProductFailure',
      function: (state) => ({...state, isFetchingPrice: false}),
    },
  ],
  {
    isFetching: false,
    isFetchingPrice: false,
  },
);

function* savePriceProductRequest({price, barcode, latitude, longitude}) {
  try {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    yield call(api.savePriceProduct, {price, barcode, latitude, longitude});
    yield put(Creators.savePriceProductSuccess());
  } catch (response) {
    yield put(Creators.savePriceProductFailure());
  }
}

function* saveProductRequest({name, barcode}) {
  try {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    yield call(api.saveProduct, {name, barcode});
    yield put(Creators.saveProductSuccess());
  } catch (response) {
    yield put(Creators.saveProductFailure());
  }
}

export {Creators, reducers, sagas};
