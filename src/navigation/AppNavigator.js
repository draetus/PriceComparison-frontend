import React from 'react';
import {connect} from 'react-redux';
import NavigationService from './NavigationService';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Metrics, pagesConfig} from '../config';
import DrawerContent from './DrawerContent';
import * as Pages from '../pages';
import {StyleSheet} from 'react-native';
import {Creators as LoginCreators} from '../features/login/reduxSagas';
import {LocalStorage} from '../lib';

function returnStackConfig(pages = []) {
  const Stack = createStackNavigator();

  const Stacks = new Array(pages.length);
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].name) {
      Stacks[i] = (
        <Stack.Screen
          key={i}
          name={pages[i].name}
          component={Pages[pages[i].name]}
          options={{headerShown: false}}
        />
      );
    }
  }
  return <Stack.Navigator headerMode="none">{Stacks}</Stack.Navigator>;
}

function returnDrawerConfig(pages = []) {
  const Drawer = createDrawerNavigator();

  const Drawers = new Array(pages.length);
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].name) {
      Drawers[i] = (
        <Drawer.Screen
          key={i}
          name={pages[i].name}
          component={Pages[pages[i].name]}
          options={{headerShown: false}}
        />
      );
    }
  }
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerPosition="left"
      drawerType="front"
      edgeWidth={Metrics.spacingLG * 2}
      minSwipeDistance={Metrics.spacingMD}
      unmountInactiveRoutes={true}
      drawerStyle={styles.drawerStyle}>
      {Drawers}
    </Drawer.Navigator>
  );
}

class AppNavigator extends React.PureComponent {
  getSavedCredentials = async () => {
    const username = await LocalStorage.getItem('username');
    const password = await LocalStorage.getItem('password');
    if (username && password) {
      this.props.keepSplashScreen();
      this.props.loginRequest({username, password, keepLogged: true});
    }
  };
  componentDidUpdate(prevProps) {
    if (
      !prevProps.isLoggedIn &&
      prevProps.isFetching &&
      !this.props.isFetching
    ) {
      this.props.hideSplashScreen();
    }
  }

  componentDidMount() {
    this.getSavedCredentials();
  }
  render() {
    return (
      <>
        <NavigationContainer
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}>
          {!this.props.isLoggedIn
            ? returnStackConfig(pagesConfig.landing)
            : null}
          {/* {this.props.isLoggedIn ? returnStackConfig(pagesConfig.home) : null} */}
          {this.props.isLoggedIn ? returnDrawerConfig(pagesConfig.home) : null}
        </NavigationContainer>
      </>
    );
  }
}

function mapStateToProps({global, login}) {
  return {
    isLoggedIn: global.isLoggedIn,
    isFetching: login.isFetching,
    isFetching: false,
  };
}

function mapDispatchToProps(dispatch) {
  const {loginRequest} = LoginCreators;
  return {
    loginRequest: (credentials) => dispatch(loginRequest(credentials.username, credentials.password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: '#00000000',
    width: Metrics.screenWidth,
    padding: 0,
  },
});
