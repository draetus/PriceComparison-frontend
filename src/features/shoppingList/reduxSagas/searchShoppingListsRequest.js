import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../../services';

export default function* searchShoppingListsRequest() {
  try {
    console.log("SHOPPING LIST CREATORS: ", Creators);
    const response = yield call(api.searchShoppingList);
    console.log("SHOPPING LIST SUCCESS: ", response);
    console.log("SHOPPING LIST SUCCESS: ");
    yield put(Creators.searchShoppingListsSuccess(response.data));
  } catch (response) {
    console.log("SHOPPING LIST FAILURE: ", response);
    yield put(Creators.searchShoppingListsFailure());
  }
}
