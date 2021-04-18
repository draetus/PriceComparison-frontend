import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export default function* saveProductRequest({name, barcode}) {
  try {
    yield call(api.saveProduct, {name, barcode});
    yield put(Creators.saveProductSuccess());
  } catch (response) {
    yield put(Creators.saveProductFailure());
  }
}
