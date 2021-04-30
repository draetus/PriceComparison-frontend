import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export default function* searchProductRequest({barcode}) {
  try {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    const response = yield call(api.searchProduct, barcode);
    yield put(Creators.searchProductSuccess(response.data));
  } catch (response) {
    yield put(Creators.searchProductFailure());
  }
}
