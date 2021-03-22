import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export default function* saveProductRequest({name, barCode}) {
  try {
    yield call(api.saveProduct, {name, barCode});
    yield put(Creators.saveProductSuccess());
  } catch (response) {
    yield put(Creators.saveProductFailure());
  }
}
