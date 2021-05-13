import createReducers from '../../../store/createPageReducer';
// import {searchShoppingListsRequest} from './searchShoppingListsRequest';
// import {createShoppingListsRequest} from './createShoppingListsRequest';
// import {deleteShoppingListsRequest} from './deleteShoppingListsRequest';
// import {searchShoppingListProductsRequest} from "./searchShoppingListProductsRequest";
// import {addProductToShoppingListRequest} from './addProductToShoppingListRequest';
// import {deleteProductFromShoppingListRequest} from './deleteProductFromShoppingListRequest';
import {put, call} from 'redux-saga/effects';

import {api} from '../../../services';

const {Creators, reducers, sagas} = createReducers(
  [
    {
      name: 'searchShoppingListsRequest',
      function: (state) => ({...state, isFetchingShoppingList: true}),
      sagaFunction: searchShoppingListsRequest,
    },
    {
      name: 'searchShoppingListsSuccess',
      params: ['shoppinglists'],
      function: (state, {shoppinglists}) => ({
        ...state,
        isFetchingShoppingList: false,
        shoppinglists: shoppinglists
      }),
    },
    {
      name: 'searchShoppingListsFailure',
      function: (state) => ({
          ...state, 
          isFetchingShoppingList: false,
          shoppinglists: []
        }),
    },
    {
      name: 'createShoppingListsRequest',
      params: ['name'],
      function: (state) => ({...state, isFetchingCreateShoppingList: true}),
      sagaFunction: createShoppingListsRequest,
    },
    {
      name: 'createShoppingListsSuccess',
      function: (state) => ({
        ...state,
        isFetchingCreateShoppingList: false
      }),
    },
    {
      name: 'createShoppingListsFailure',
      function: (state) => ({
          ...state, 
          isFetchingCreateShoppingList: false
        }),
    },
    {
      name: 'deleteShoppingListsRequest',
      params: ['id'],
      function: (state) => ({...state, isFetchingDeleteShoppingList: true}),
      sagaFunction: deleteShoppingListsRequest,
    },
    {
      name: 'deleteShoppingListsSuccess',
      function: (state) => ({
        ...state,
        isFetchingDeleteShoppingList: false
      }),
    },
    {
      name: 'deleteShoppingListsFailure',
      function: (state) => ({
          ...state, 
          isFetchingDeleteShoppingList: false
        }),
    },
    {
      name: 'searchShoppingListProductsRequest',
      params: ['id'],
      function: (state) => ({...state, isFetchingShoppingListProducts: true}),
      sagaFunction: searchShoppingListProductsRequest,
    },
    {
      name: 'searchShoppingListProductsSuccess',
      params: ['shoppingListProducts'],
      function: (state, {shoppingListProducts}) => ({
        ...state,
        isFetchingShoppingListProducts: false,
        shoppingListProducts: shoppingListProducts
      }),
    },
    {
      name: 'searchShoppingListProductsFailure',
      function: (state) => ({
          ...state, 
          isFetchingShoppingListProducts: false,
          shoppingListProducts: []
        }),
    },
    {
      name: 'addProductToShoppingListRequest',
      params: ['id', 'barcode', 'quantity'],
      function: (state) => ({...state, isFetchingAddProductToShoppingList: true}),
      sagaFunction: addProductToShoppingListRequest,
    },
    {
      name: 'addProductToShoppingListSuccess',
      function: (state) => ({
        ...state,
        isFetchingAddProductToShoppingList: false,
      }),
    },
    {
      name: 'addProductToShoppingListFailure',
      function: (state) => ({
          ...state, 
          isFetchingAddProductToShoppingList: false
        }),
    },
    {
      name: 'deleteProductFromShoppingListRequest',
      params: ['id', 'barcode'],
      function: (state) => ({...state, isFetchingDeleteProductShoppingList: true}),
      sagaFunction: deleteProductFromShoppingListRequest,
    },
    {
      name: 'deleteProductFromShoppingListSuccess',
      function: (state) => ({
        ...state,
        isFetchingDeleteProductShoppingList: false
      }),
    },
    {
      name: 'deleteProductFromShoppingListFailure',
      function: (state) => ({
          ...state, 
          isFetchingDeleteProductShoppingList: false
        }),
    },
  ],
  {
    isFetchingShoppingList: false,
    isFetchingCreateShoppingList: false,
    isFetchingDeleteShoppingList: false,
    isFetchingShoppingListProducts: false,
    isFetchingAddProductToShoppingList: false,
    isFetchingDeleteProductShoppingList: false,
    shoppinglists: [],
    shoppingListProducts: []
  },
);

function* addProductToShoppingListRequest({id, barcode, quantity}) {
  try {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    yield call(api.addProductToShoppingList, id, {barcode: barcode, quantity: quantity});
    yield put(Creators.searchShoppingListProductsRequest(id));
    yield put(Creators.addProductToShoppingListSuccess());
  } catch (response) {
    yield put(Creators.addProductToShoppingListFailure());
  }
}

function* createShoppingListsRequest({name}) {
  try {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    yield call(api.createShoppingList, {name: name});
    yield put(Creators.searchShoppingListsRequest());
    yield put(Creators.addProductToShoppingListSuccess());
  } catch (response) {
    yield put(Creators.createShoppingListsFailure());
  }
}

function* deleteProductFromShoppingListRequest({id, barcode}) {
  try {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    yield call(api.deleteProductFromShoppingList, id, barcode);
    yield put(ShoppingCartCreators.clearShoppingCart());
    yield put(Creators.searchShoppingListProductsRequest(id));
    yield put(Creators.deleteProductFromShoppingListSuccess());
  } catch (response) {
    yield put(Creators.deleteProductFromShoppingListFailure());
  }
}

function* deleteShoppingListsRequest({id}) {
  try {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    yield call(api.deleteShoppingList, id);
    yield put(ShoppingCartCreators.clearShoppingCart());
    yield put(Creators.searchShoppingListsRequest());
    yield put(Creators.deleteShoppingListsSuccess());
  } catch (response) {
    yield put(Creators.deleteShoppingListsFailure());
  }
}

function* searchShoppingListProductsRequest({id}) {
  try {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    const response = yield call(api.searchShoppingListProducts, id);
    yield put(Creators.searchShoppingListProductsSuccess(response.data));
  } catch (response) {
    yield put(Creators.searchShoppingListProductsFailure());
  }
}

function* searchShoppingListsRequest() {
  try {
    console.log("SAGA MESSAGE");console.log("SAGA MESSAGE");
    const response = yield call(api.searchShoppingList);
    yield put(Creators.searchShoppingListsSuccess(response.data));
  } catch (response) {
    yield put(Creators.searchShoppingListsFailure());
  }
}

export {Creators, reducers, sagas};
