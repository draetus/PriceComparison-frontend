import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export default function* deleteProductFromShoppingListRequest({id, barcode}) {
  try {
    console.log("SHOPPING LIST CREATORS: ", Creators);
    yield call(api.deleteProductFromShoppingList, id, barcode);
    console.log("SHOPPING LIST SUCCESS: ");
    console.log("SHOPPING LIST SUCCESS: ");
    yield put(Creators.searchShoppingListProductsRequest(id));
    yield put(Creators.deleteProductFromShoppingListSuccess());
  } catch (response) {
    console.log("SHOPPING LIST FAILURE: ", response);
    yield put(Creators.deleteProductFromShoppingListFailure());
  }
}
