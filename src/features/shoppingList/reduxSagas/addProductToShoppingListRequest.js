import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export function* addProductToShoppingListRequest({id, barcode, quantity}) {
  try {
    
    yield call(api.addProductToShoppingList, id, {barcode: barcode, quantity: quantity});
    yield put(Creators.searchShoppingListProductsRequest(id));
    yield put(Creators.addProductToShoppingListSuccess());
  } catch (response) {
    yield put(Creators.addProductToShoppingListFailure());
  }
}
