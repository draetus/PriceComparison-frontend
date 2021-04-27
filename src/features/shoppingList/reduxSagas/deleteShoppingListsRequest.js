import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export default function* deleteShoppingListsRequest({id}) {
  try {
    console.log("SHOPPING LIST CREATORS: ", Creators);
    yield call(api.deleteShoppingList, id);
    console.log("SHOPPING LIST SUCCESS: ");
    console.log("SHOPPING LIST SUCCESS: ");
    yield put(Creators.searchShoppingListsRequest());
    yield put(Creators.deleteShoppingListsSuccess());
  } catch (response) {
    console.log("SHOPPING LIST FAILURE: ", response);
    yield put(Creators.deleteShoppingListsFailure());
  }
}
