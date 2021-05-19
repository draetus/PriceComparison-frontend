import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

export function* updateShoppingCartRequest({products}) {
    
    yield put(Creators.updateShoppingCartSuccess());
}
