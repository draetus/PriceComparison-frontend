import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export default function* deleteShoppingListsRequest({id}) {
  try {
    console.log("SAGA MESSAGE");
    yield call(api.deleteShoppingList, id);
    yield put(Creators.searchShoppingListsRequest());
    yield put(Creators.deleteShoppingListsSuccess());
  } catch (response) {
    yield put(Creators.deleteShoppingListsFailure());
  }
}
