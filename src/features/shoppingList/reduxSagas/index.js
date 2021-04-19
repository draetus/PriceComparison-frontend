import createReducers from '../../../store/createPageReducer';
import searchShoppingListsRequest from './searchShoppingListsRequest';
import createShoppingListsRequest from './createShoppingListsRequest';
import deleteShoppingListsRequest from './deleteShoppingListsRequest';

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
    }
  ],
  {
    isFetchingShoppingList: false,
    isFetchingCreateShoppingList: false,
    isFetchingDeleteShoppingList: false,
    shoppinglists: []
  },
);

export {Creators, reducers, sagas};
