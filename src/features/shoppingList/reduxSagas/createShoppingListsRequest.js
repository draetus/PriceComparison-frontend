import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export default function* createShoppingListsRequest({name}) {
  try {
    yield call(api.createShoppingList, {name: name});
    yield put(Creators.searchShoppingListsRequest());
    yield put(Creators.createShoppingListsSuccess());
  } catch (response) {
    yield put(Creators.createShoppingListsFailure());
  }
}
