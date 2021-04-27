import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export default function* savePriceProductRequest({price, barcode, latitude, longitude}) {
  try {
    console.log("REGISTER PRODUCT CREATORS: ", Creators);
    yield call(api.savePriceProduct, {price, barcode, latitude, longitude});
    console.log("REGISTER PRODUCT SUCCESS: ");
    yield put(Creators.savePriceProductSuccess());
  } catch (response) {
    console.log("REGISTER PRODUCT FAILURE: ", response);
    yield put(Creators.savePriceProductFailure());
  }
}
