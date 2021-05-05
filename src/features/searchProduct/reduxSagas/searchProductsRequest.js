import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export default function* searchProductsRequest({name}) {
  try {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    const response = yield call(api.searchProducts, name);
    yield put(Creators.searchProductsSuccess(response.data));
  } catch (response) {
    yield put(Creators.searchProductsFailure());
  }
}
