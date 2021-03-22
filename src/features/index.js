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

// inseris os sagas aqui
const sagas = [
  ...globalSagas,
  ...loginSagas,
  ...productRegisterSagas,
];

// inseris os reducers aqui
const reducers = {
  global: globalReducer,
  login: loginReducer,
  registerProduct: productRegisterReducer,
};

export {
  sagas,
  reducers,
  // inserir as páginas abaixo
  LoginContainer,
  RegisterProductContainer
};
