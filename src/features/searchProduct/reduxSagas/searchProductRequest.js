import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export default function* searchProductRequest({barcode}) {
  try {
    console.log("SEARCH PRODUCT CREATORS: ", Creators);
    const response = yield call(api.searchProduct, barcode);
    console.log("SEARCH PRODUCT SUCCESS: ", response);
    yield put(Creators.searchProductSuccess(response.data));
  } catch (response) {
    console.log("SEARCH PRODUCT FAILURE: ", response);
    yield put(Creators.searchProductFailure());
  }
}
