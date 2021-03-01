import {Keyboard} from 'react-native';
import {
  CommonActions,
  DrawerActions,
  StackActions,
} from '@react-navigation/native';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(name, params, key) {
  Keyboard.dismiss();
  navigator.dispatch(CommonActions.navigate(name, {...params, key}));
}

function replace(name, params, key) {
  Keyboard.dismiss();
  navigator.dispatch(StackActions.replace(name, {...params, key}));
}

function toggleDrawer() {
  navigator.dispatch(DrawerActions.toggleDrawer());
}

function closeDrawer() {
  navigator.dispatch(DrawerActions.closeDrawer());
}

function goBack() {
  navigator.dispatch({
    ...CommonActions.goBack(),
  });
}

function pop(count) {
  navigator.dispatch(StackActions.pop(count));
}

export default {
  navigate,
  replace,
  goBack,
  pop,
  setTopLevelNavigator,
  toggleDrawer,
  closeDrawer,
};
