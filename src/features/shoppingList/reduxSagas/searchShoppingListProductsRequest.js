import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export default function* searchShoppingListProductsRequest({id}) {
  try {
    console.log("SHOPPING LIST CREATORS: ", Creators);
    const response = yield call(api.searchShoppingListProducts, id);
    yield put(Creators.searchShoppingListProductsSuccess(response.data));
  } catch (response) {
    yield put(Creators.searchShoppingListProductsFailure());
  }
}
