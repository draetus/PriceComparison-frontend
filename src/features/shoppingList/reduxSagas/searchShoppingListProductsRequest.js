import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export function* searchShoppingListProductsRequest({id}) {
  try {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    const response = yield call(api.searchShoppingListProducts, id);
    yield put(Creators.searchShoppingListProductsSuccess(response.data));
  } catch (response) {
    yield put(Creators.searchShoppingListProductsFailure());
  }
}
