import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../services';

import { searchModal } from '../../modals/utils';


export default function* openSearchProductModalRequest({barcode}) {
  try {
    console.log("CUSTOM MODAL CREATORS: ", Creators);
    const response = yield call(api.searchProduct, barcode);

    console.log("CUSTOM MODAL SUCCESS: ", response);
    searchModal.setInfos(response.data.barcode, response.data.name);
    yield put(Creators.openSearchProductModalSuccess());
  } catch (response) {
    console.log("CUSTOM MODAL FAILURE: ", response);
    yield put(Creators.openSearchProductModalFailure());
  }
}
