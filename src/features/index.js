import {
  sagas as globalSagas,
  reducers as globalReducer,
} from './globalReduxSagas';

import {
  loginSagas,
  loginReducer,
  LoginContainer
} from './login';

import {
  productRegisterSagas,
  productRegisterReducer,
  RegisterProductContainer
} from "./registerProduct";

import {
  searchProductSagas,
  searchProductReducer,
  SearchProductContainer
} from "./searchProduct";

import {
  customModalSagas,
  customModalReducer
} from '../modals';

// inseris os sagas aqui
const sagas = [
  ...globalSagas,
  ...loginSagas,
  ...productRegisterSagas,
  ...searchProductSagas,
  ...customModalSagas,
];

// inseris os reducers aqui
const reducers = {
  global: globalReducer,
  login: loginReducer,
  registerProduct: productRegisterReducer,
  searchProduct: searchProductReducer,
  customModal: customModalReducer,
};

export {
  sagas,
  reducers,
  // inserir as páginas abaixo
  LoginContainer,
  RegisterProductContainer,
  SearchProductContainer
};
