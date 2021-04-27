import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export default function* addProductToShoppingListRequest({id, barcode}) {
  try {
    console.log("SHOPPING LIST CREATORS: ", Creators);
    yield call(api.addProductToShoppingList, id, {barcode: barcode});
    console.log("SHOPPING LIST SUCCESS: ");
    console.log("SHOPPING LIST SUCCESS: ");
    yield put(Creators.searchShoppingListProductsRequest(id));
    yield put(Creators.addProductToShoppingListSuccess());
  } catch (response) {
    console.log("SHOPPING LIST FAILURE: ", response);
    yield put(Creators.addProductToShoppingListFailure());
  }
}
