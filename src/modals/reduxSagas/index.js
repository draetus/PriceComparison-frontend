import createReducers from '../../store/createPageReducer';
import openRegisterProductModalRequest from './openRegisterProductModalRequest';
import openSearchProductModalRequest from './openSearchProductModalRequest';
import openAddProductToShoppingListModalRequest from './openAddProductToShoppingListModalRequest';
import openAddProductToShoppingCartModalRequest from './openAddProductToShoppingCartModalRequest';

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
      params: ['barcode'],
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
      params: ['barcode', 'shoppingListId', 'shoppingListProducts', 'shoppingCartProducts'],
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

export {Creators, reducers, sagas};
