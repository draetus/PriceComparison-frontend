import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export function* searchSingleProductRequest({barcode, lat, lon}) {
  try {
    
    const response = yield call(api.searchProduct, barcode, lat, lon);
    yield put(Creators.searchSingleProductSuccess(response.data));
  } catch (response) {
    yield put(Creators.searchSingleProductFailure());
  }
}
