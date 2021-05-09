import createReducers from '../../../store/createPageReducer';
import {searchShoppingListsRequest} from './searchShoppingListsRequest';
import {createShoppingListsRequest} from './createShoppingListsRequest';
import {deleteShoppingListsRequest} from './deleteShoppingListsRequest';
import {searchShoppingListProductsRequest} from "./searchShoppingListProductsRequest";
import {addProductToShoppingListRequest} from './addProductToShoppingListRequest';
import {deleteProductFromShoppingListRequest} from './deleteProductFromShoppingListRequest';

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

export {Creators, reducers, sagas};
