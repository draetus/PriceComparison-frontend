import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export default function* saveProductRequest({name, barcode}) {
  try {
    console.log("REGISTER PRODUCT CREATORS: ", Creators);
    yield call(api.saveProduct, {name, barcode});
    console.log("REGISTER PRODUCT SUCCESS: ");
    yield put(Creators.saveProductSuccess());
  } catch (response) {
    console.log("REGISTER PRODUCT FAILURE: ", response);
    yield put(Creators.saveProductFailure());
  }
}
