import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../services';

import { searchModal } from '../../modals/utils';


export default function* openSearchProductModalRequest({barcode}) {
  try {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    const response = yield call(api.searchProduct, barcode);

    searchModal.setInfos(response.data.barcode, response.data.name);
    yield put(Creators.openSearchProductModalSuccess());
  } catch (response) {
    yield put(Creators.openSearchProductModalFailure());
  }
}
