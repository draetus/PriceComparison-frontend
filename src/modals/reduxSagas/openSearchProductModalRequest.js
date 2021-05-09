import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../services';

import { searchModal } from '../../modals/utils';


export function* openSearchProductModalRequest({barcode, lat, lon}) {
  try {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    console.log("SAGA: ", {barcode, lat, lon});
    const response = yield call(api.searchProduct, barcode, lat, lon);
    console.log("SAGA RESPONSE: ", response);

    searchModal.setInfos(response.data.barcode, response.data.name);
    yield put(Creators.openSearchProductModalSuccess());
  } catch (response) {
    yield put(Creators.openSearchProductModalFailure());
  }
}
