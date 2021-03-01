import {createActions, createReducer} from 'reduxsauce';
import * as sagaEffects from 'redux-saga/effects';

function createReducers(functionsConfig, initialValues = {}) {
  const createActionsObj = {};
  const createReducerObj = {};
  const sagas = [];

  const {length} = functionsConfig;
  for (let i = length - 1; i >= 0; i--) {
    const item = functionsConfig[i];
    const action = item.name;
    const type = getTypeName(item.name);
    createActionsObj[action] = item.params ? item.params : null;
    createReducerObj[type] = item.function;
    if (item.sagaFunction) {
      sagas.push(
        sagaEffects[item.sagaEffect ? item.sagaEffect : 'takeLatest'](
          type,
          item.sagaFunction,
        ),
      );
    }
  }

  const {Creators} = createActions(createActionsObj);
  const reducers = createReducer(initialValues, createReducerObj);

  return {Creators, reducers, sagas};
}

function getTypeName(name) {
  let type = '';
  const split = name.split(/(?=[A-Z])/);
  const {length} = split;
  for (let i = 0; i < length; i++) {
    type += `${split[i].toUpperCase()}${i < length - 1 ? '_' : ''}`;
  }

  return type;
}

export default createReducers;
