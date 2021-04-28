import createReducers from '../../../store/createPageReducer';

const {Creators, reducers, sagas} = createReducers(
  [
    {
      name: 'updateShoppingCart',
      params: ['products'],
      function: (state, {products}) => ({
          ...state, 
          products: products
        }),
    },
    {
      name: 'clearShoppingCart',
      function: (state) => ({
        ...state,
        products: []
      }),
    }
  ],
  {
    products: []
  },
);

export {Creators, reducers, sagas};
