import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../services';

import { searchModal } from '../../modals/utils';


export function* openSearchProductModalRequest({barcode, lat, lon}) {
  try {
    
    const response = yield call(api.searchProduct, barcode, lat, lon);

    searchModal.setInfos(response.data.barcode, response.data.name);
    yield put(Creators.openSearchProductModalSuccess());
  } catch (response) {
    yield put(Creators.openSearchProductModalFailure());
  }
}
