import createReducers from '../../../store/createPageReducer';
import saveProductRequest from "./saveProductRequest";
import savePriceProductRequest from "./savePriceProductRequest";

const {Creators, reducers, sagas} = createReducers(
  [
    {
      name: 'saveProductRequest',
      params: ['name', 'barcode'],
      function: (state) => ({...state, isFetching: true}),
      sagaFunction: saveProductRequest,
    },
    {
      name: 'saveProductSuccess',
      function: (state) => ({
        ...state,
        isFetching: false,
      })
    },
    {
      name: 'saveProductFailure',
      function: (state) => ({...state, isFetching: false}),
    },
    {
      name: 'savePriceProductRequest',
      params: ['price', 'barcode', 'latitude', 'longitude'],
      function: (state) => ({...state, isFetchingPrice: true}),
      sagaFunction: savePriceProductRequest,
    },
    {
      name: 'savePriceProductSuccess',
      function: (state) => ({
        ...state,
        isFetchingPrice: false,
      })
    },
    {
      name: 'savePriceProductFailure',
      function: (state) => ({...state, isFetchingPrice: false}),
    },
  ],
  {
    isFetching: false,
    isFetchingPrice: false,
  },
);

export {Creators, reducers, sagas};
