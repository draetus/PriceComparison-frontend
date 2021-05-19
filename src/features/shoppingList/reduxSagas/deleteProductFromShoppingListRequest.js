import {put, call} from 'redux-saga/effects';

import {Creators} from '.';
import {Creators as ShoppingCartCreators} from '../../shoppingCartInProgress/reduxSagas';

import {api} from '../../../services';

export function* deleteProductFromShoppingListRequest({id, barcode}) {
  try {
    
    yield call(api.deleteProductFromShoppingList, id, barcode);
    yield put(ShoppingCartCreators.clearShoppingCart());
    yield put(Creators.searchShoppingListProductsRequest(id));
    yield put(Creators.deleteProductFromShoppingListSuccess());
  } catch (response) {
    yield put(Creators.deleteProductFromShoppingListFailure());
  }
}
