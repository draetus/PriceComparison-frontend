import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export default function* addProductToShoppingListRequest({id, barcode}) {
  try {
    console.log("SAGA MESSAGE");
    yield call(api.addProductToShoppingList, id, {barcode: barcode});
    yield put(Creators.searchShoppingListProductsRequest(id));
    yield put(Creators.addProductToShoppingListSuccess());
  } catch (response) {
    yield put(Creators.addProductToShoppingListFailure());
  }
}
