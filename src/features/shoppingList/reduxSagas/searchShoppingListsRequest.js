import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export function* searchShoppingListsRequest() {
  try {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    const response = yield call(api.searchShoppingList);
    yield put(Creators.searchShoppingListsSuccess(response.data));
  } catch (response) {
    yield put(Creators.searchShoppingListsFailure());
  }
}
