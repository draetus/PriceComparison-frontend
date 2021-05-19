import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export function* searchProductsRequest({name}) {
  try {
    
    const response = yield call(api.searchProducts, name);
    yield put(Creators.searchProductsSuccess(response.data));
  } catch (response) {
    yield put(Creators.searchProductsFailure());
  }
}
