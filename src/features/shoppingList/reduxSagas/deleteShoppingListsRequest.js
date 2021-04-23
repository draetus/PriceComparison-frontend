import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export default function* deleteShoppingListsRequest({id}) {
  try {
    const response = yield call(api.deleteShoppingList, id);
    console.log("DELETE SHOPPING LSIT REQUEST: ", response);
    yield put(Creators.searchShoppingListsRequest());
    yield put(Creators.deleteShoppingListsSuccess());
  } catch (response) {
    yield put(Creators.deleteShoppingListsFailure());
  }
}
