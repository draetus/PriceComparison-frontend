import {put, call} from 'redux-saga/effects';

import {Creators} from '.';
import {Creators as ShoppingCartCreators} from "../../shoppingCartInProgress/reduxSagas";

import {api} from '../../../services';

export function* deleteShoppingListsRequest({id}) {
  try {
    
    yield call(api.deleteShoppingList, id);
    yield put(ShoppingCartCreators.clearShoppingCart());
    yield put(Creators.searchShoppingListsRequest());
    yield put(Creators.deleteShoppingListsSuccess());
  } catch (response) {
    yield put(Creators.deleteShoppingListsFailure());
  }
}
