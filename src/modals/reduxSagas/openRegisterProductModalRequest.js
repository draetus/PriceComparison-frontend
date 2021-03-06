import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../services';

import { registerModal } from '../../modals/utils';


export function* openRegisterProductModalRequest({barcode}) {
  try {
    
    const response = yield call(api.checkIfExists, barcode);

    registerModal.setInfos(barcode, response.data.exists);
    yield put(Creators.openRegisterProductModalSuccess());
  } catch (response) {
    yield put(Creators.openRegisterProductModalFailure());
  }
}
