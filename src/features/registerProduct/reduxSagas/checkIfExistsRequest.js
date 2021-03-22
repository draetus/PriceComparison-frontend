import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export default function* checkIfExistsRequest({barCode}) {
  try {
    const response = yield call(api.checkIfExists, barCode);
    yield put(Creators.checkIfExistsSuccess(response.data.exists));
  } catch (response) {
    yield put(Creators.checkIfExistsFailure());
  }
}
