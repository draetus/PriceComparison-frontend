import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../services';

import { registerModal } from '../../modals/utils';


export default function* openRegisterProductModalRequest({barcode}) {
  try {
    console.log("CUSTOM MODAL CREATORS: ", Creators);
    const response = yield call(api.checkIfExists, barcode);

    console.log("CUSTOM MODAL SUCCESS: ", response);
    registerModal.setInfos(barcode, response.data.exists);
    yield put(Creators.openRegisterProductModalSuccess());
  } catch (response) {
    console.log("CUSTOM MODAL FAILURE: ", response);
    yield put(Creators.openRegisterProductModalFailure());
  }
}
