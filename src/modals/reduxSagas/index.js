import createReducers from '../../store/createPageReducer';
// import {openRegisterProductModalRequest} from './openRegisterProductModalRequest';
// import {openSearchProductModalRequest} from './openSearchProductModalRequest';
// import {openAddProductToShoppingListModalRequest} from './openAddProductToShoppingListModalRequest';
// import {openAddProductToShoppingCartModalRequest} from './openAddProductToShoppingCartModalRequest';
import {put, call} from 'redux-saga/effects';

import {api} from '../../services';

import { addProductToShoppingCartModal } from '../../modals/utils';
import { addProductToShoppingListModal } from '../../modals/utils';
import { registerModal } from '../../modals/utils';
import { searchModal } from '../../modals/utils';

const {Creators, reducers, sagas} = createReducers(
  [
    {
      name: 'openRegisterProductModalRequest',
      params: ['barcode'],
      function: (state) => ({...state, isFetchingRegisterModal: true}),
      sagaFunction: openRegisterProductModalRequest,
    },
    {
      name: 'openRegisterProductModalSuccess',
      function: (state) => ({
        ...state,
        isFetchingRegisterModal: false,
      })
    },
    {
      name: 'openRegisterProductModalFailure',
      function: (state) => ({
        ...state, 
        isFetchingRegisterModal: false
      }),
    },
    {
      name: 'openSearchProductModalRequest',
      params: ['barcode', 'lat', 'lon'],
      function: (state) => ({...state, isFetchingSearchModal: true}),
      sagaFunction: openSearchProductModalRequest,
    },
    {
      name: 'openSearchProductModalSuccess',
      function: (state) => ({
        ...state,
        isFetchingSearchModal: false,
      })
    },
    {
      name: 'openSearchProductModalFailure',
      function: (state) => ({
        ...state, 
        isFetchingSearchModal: false
      }),
    },
    {
      name: 'openAddProductToShoppingListModalRequest',
      params: ['id', 'barcode'],
      function: (state) => ({...state, isFetchingAddProductToShoppingListModal: true}),
      sagaFunction: openAddProductToShoppingListModalRequest,
    },
    {
      name: 'openAddProductToShoppingListModalSuccess',
      function: (state) => ({
        ...state,
        isFetchingAddProductToShoppingListModal: false,
      })
    },
    {
      name: 'openAddProductToShoppingListModalFailure',
      function: (state) => ({
        ...state, 
        isFetchingAddProductToShoppingListModal: false
      }),
    },
    {
      name: 'openAddProductToShoppingCartModalRequest',
      params: ['barcode', 'lat', 'lon', 'shoppingListId', 'shoppingListProducts', 'shoppingCartProducts', 'noShoppingList'],
      function: (state) => ({...state, isFetchingAddProductToShoppingCartModal: true}),
      sagaFunction: openAddProductToShoppingCartModalRequest,
    },
    {
      name: 'openAddProductToShoppingCartModalSuccess',
      function: (state) => ({
        ...state,
        isFetchingAddProductToShoppingCartModal: false,
      })
    },
    {
      name: 'openAddProductToShoppingCartModalFailure',
      function: (state) => ({
        ...state, 
        isFetchingAddProductToShoppingCartModal: false
      }),
    }
  ],
  {
    isFetchingRegisterModal: false,
    isFetchingSearchModal: false,
    isFetchingAddProductToShoppingListModal: false,
    isFetchingAddProductToShoppingCartModal: false,
  },
);

function* openAddProductToShoppingCartModalRequest({barcode, lat, lon, shoppingListId, shoppingListProducts, shoppingCartProducts, noShoppingList}) {
  try {
    
    const response = yield call(api.checkIfExists, barcode);
    let productName = null;
    if (response.data.exists) {
      const productData = yield call(api.searchProduct, barcode, lat, lon);
      productName = productData.data.name;
    }
    
    addProductToShoppingCartModal.setInfos(barcode, response.data.exists, productName, shoppingListId, shoppingListProducts, shoppingCartProducts, noShoppingList);
    yield put(Creators.openAddProductToShoppingCartModalSuccess());
  } catch (response) {
    yield put(Creators.openAddProductToShoppingCartModalFailure());
  }
}

function* openAddProductToShoppingListModalRequest({barcode, id}) {
  try {
    
    const response = yield call(api.checkIfExists, barcode);

    addProductToShoppingListModal.setInfos(barcode, response.data.exists, id);
    yield put(Creators.openAddProductToShoppingListModalSuccess());
  } catch (response) {
    yield put(Creators.openAddProductToShoppingListModalFailure());
  }
}

function* openRegisterProductModalRequest({barcode}) {
  try {
    
    const response = yield call(api.checkIfExists, barcode);

    registerModal.setInfos(barcode, response.data.exists);
    yield put(Creators.openRegisterProductModalSuccess());
  } catch (response) {
    yield put(Creators.openRegisterProductModalFailure());
  }
}

function* openSearchProductModalRequest({barcode, lat, lon}) {
  try {
    
    const response = yield call(api.searchProduct, barcode, lat, lon);

    searchModal.setInfos(response.data.barcode, response.data.name);
    yield put(Creators.openSearchProductModalSuccess());
  } catch (response) {
    yield put(Creators.openSearchProductModalFailure());
  }
}

export {Creators, reducers, sagas};
