import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../services';

import { addProductToShoppingListModal } from '../../modals/utils';


export default function* openAddProductToShoppingListModalRequest({barcode, id}) {
  try {
    console.log("CUSTOM MODAL CREATORS ADD PRODUCT: ", Creators);
    const response = yield call(api.checkIfExists, barcode);

    console.log("CUSTOM MODAL SUCCESS: ", response);
    addProductToShoppingListModal.setInfos(barcode, response.data.exists, id);
    yield put(Creators.openAddProductToShoppingListModalSuccess());
  } catch (response) {
    console.log("CUSTOM MODAL FAILURE: ", response);
    yield put(Creators.openAddProductToShoppingListModalFailure());
  }
}
