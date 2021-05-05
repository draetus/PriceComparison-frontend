import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../services';

import { addProductToShoppingListModal } from '../../modals/utils';


export default function* openAddProductToShoppingListModalRequest({barcode, id}) {
  try {
    console.log("SAGA MESSAGE");
    const response = yield call(api.checkIfExists, barcode);

    addProductToShoppingListModal.setInfos(barcode, response.data.exists, id);
    yield put(Creators.openAddProductToShoppingListModalSuccess());
  } catch (response) {
    yield put(Creators.openAddProductToShoppingListModalFailure());
  }
}
