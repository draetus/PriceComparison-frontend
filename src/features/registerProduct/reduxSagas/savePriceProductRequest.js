import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export function* savePriceProductRequest({price, barcode, latitude, longitude}) {
  try {
    yield call(api.savePriceProduct, {price, barcode, latitude, longitude});
    yield put(Creators.savePriceProductSuccess());
  } catch (response) {
    yield put(Creators.savePriceProductFailure());
  }
}
