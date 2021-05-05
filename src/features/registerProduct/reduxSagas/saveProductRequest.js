import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export default function* saveProductRequest({name, barcode}) {
  try {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    yield call(api.saveProduct, {name, barcode});
    yield put(Creators.saveProductSuccess());
  } catch (response) {
    yield put(Creators.saveProductFailure());
  }
}
