import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export default function* saveProductRequest({name, barCode}) {
  try {
    const response = yield call(api.saveProduct, {name, barCode});
    yield put(Creators.saveProductSuccess(response.data.exists));
  } catch (response) {
    yield put(Creators.saveProductFailure());
  }
}
