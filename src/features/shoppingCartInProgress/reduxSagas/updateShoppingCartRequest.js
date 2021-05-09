import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

export function* updateShoppingCartRequest({products}) {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    yield put(Creators.updateShoppingCartSuccess());
}
