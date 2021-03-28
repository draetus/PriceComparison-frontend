import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export default function* searchProductRequest({barCode}) {
  try {
    const response = yield call(api.searchProduct, barCode);
    yield put(Creators.searchProductSuccess(response.data));
  } catch (response) {
    console.log("FAILURE: ", response);
    yield put(Creators.searchProductFailure());
  }
}
