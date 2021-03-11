import {
  sagas as globalSagas,
  reducers as globalReducer,
} from './globalReduxSagas';

import {
  loginSagas,
  loginReducer,
  LoginContainer
} from './login';

// inseris os sagas aqui
const sagas = [
  ...globalSagas,
  ...loginSagas,
];

// inseris os reducers aqui
const reducers = {
  global: globalReducer,
  login: loginReducer,
};

export {
  sagas,
  reducers,
  // inserir as páginas abaixo
  LoginContainer

};
