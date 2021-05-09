import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export function* addProductToShoppingListRequest({name}) {
  try {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    yield call(api.createShoppingList, {name: name});
    yield put(Creators.searchShoppingListsRequest());
    yield put(Creators.addProductToShoppingListSuccess());
  } catch (response) {
    yield put(Creators.createShoppingListsFailure());
  }
}
