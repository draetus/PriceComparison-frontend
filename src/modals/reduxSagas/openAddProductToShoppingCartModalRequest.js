import {put, call} from 'redux-saga/effects';

import {Creators} from '.';

import {api} from '../../services';

import { addProductToShoppingCartModal } from '../../modals/utils';


export function* openAddProductToShoppingCartModalRequest({barcode, lat, lon, shoppingListId, shoppingListProducts, shoppingCartProducts}) {
  try {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    const response = yield call(api.checkIfExists, barcode);
    let productName = null;
    if (response.data.exists) {
      const productData = yield call(api.searchProduct, barcode, lat, lon);
      productName = productData.data.name;
    }
    
    addProductToShoppingCartModal.setInfos(barcode, response.data.exists, productName, shoppingListId, shoppingListProducts, shoppingCartProducts);
    yield put(Creators.openAddProductToShoppingCartModalSuccess());
  } catch (response) {
    yield put(Creators.openAddProductToShoppingCartModalFailure());
  }
}
