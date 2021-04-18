import createReducers from '../../store/createPageReducer';
import openRegisterProductModalRequest from './openRegisterProductModalRequest';
import openSearchProductModalRequest from './openSearchProductModalRequest';

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
    }
  ],
  {
    isFetchingRegisterModal: false,
    isFetchingSearchModal: false
  },
);

export {Creators, reducers, sagas};
