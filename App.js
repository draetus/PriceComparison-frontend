import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {
  Animated,
  StatusBar,
  Platform,
  UIManager,
  StyleSheet,
} from 'react-native';
import {AppNavigator} from './src/navigation';
import {Theme} from './src/config';
import configureStore from './src/store';
import {Modal, ModalError, RegisterProductModal, SearchProductModal, RegisterShoppingListModal} from './src/modals/containers';
import Moment from 'moment';
import 'moment/locale/pt-br';
Moment.updateLocale('pt-br');

// symbol polyfills
global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');

// collection fn polyfills
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');

const {store} = configureStore();

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  state = {
    fadeAnim: new Animated.Value(0),
  };

  hideSplashScreen = () => {
    this.timeout = setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  };

  componentDidMount = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      useNativeDriver: true,
      duration: 500,
    }).start();
    this.hideSplashScreen();
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <Animated.View
          style={{
            opacity: this.state.fadeAnim,
            ...styles.container,
          }}>
          <Provider store={store}>
            <PaperProvider theme={Theme.light}>
              <AppNavigator
                keepSplashScreen={() => clearTimeout(this.timeout)}
                hideSplashScreen={this.hideSplashScreen}
              />
              <SearchProductModal />
              <RegisterProductModal />
              <RegisterShoppingListModal />
              <Modal />
              <ModalError />
            </PaperProvider>
          </Provider>
        </Animated.View>
      </>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
