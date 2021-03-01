import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {TouchableRipple, ThemeProvider, IconButton} from 'react-native-paper';
import {connect} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {pagesConfig, Theme, Logos, Metrics} from '../config';
import {menuNavigation, toggleDrawer} from './NavigationHelpers';
import {Creators as GlobalCreators} from '../features/globalReduxSagas';
import {Typography} from '../components';

class DrawerMenu extends React.Component {
  MenuItem = ({item, subMenus, navigation, conditionToTest, colors, index}) => {
    const {title, icon, svgIcon, name, pageConditionsToShow, able} = item;
    const styles = createItemStyles({
      ...this.props,
      colors,
      alternative: index % 2 === 0,
    });
    const navigateAndCloseDrawer = () => {
      if (title !== 'Sair') {
        const {closeDrawer} = navigation;
        closeDrawer();
        menuNavigation(name);
      } else {
        this.props.logout();
      }
    };
    const Icon = svgIcon;

    let disabled = true;
    if (able) {
      if (pageConditionsToShow) {
        const {length} = pageConditionsToShow;
        for (let i = 0; i < length; i++) {
          if (conditionToTest === pageConditionsToShow[i]) {
            disabled = false;
            break;
          }
        }
      } else {
        disabled = false;
      }
    }

    const functionOnPress = subMenus
      ? () => this.setState({[title]: !this.state[title]})
      : navigateAndCloseDrawer;
    const MenuItem = this.MenuItem;

    return (
      <>
        <TouchableRipple
          onPress={disabled ? null : () => functionOnPress()}
          style={styles.container}>
          <>
            {Icon ? (
              <Icon width={Metrics.getSize(20)} height={Metrics.getSize(20)} />
            ) : (
              <MaterialCommunityIcons
                color={colors.text}
                name={icon}
                style={styles.icon}
                size={Metrics.getSize(20)}
              />
            )}
            <Typography style={styles.title}>{title}</Typography>
          </>
        </TouchableRipple>
        {subMenus && this.state[title] && (
          <View
            style={{
              backgroundColor: colors.text,
              paddingLeft: Metrics.spacingSM,
            }}>
            {subMenus.map((menuItem) => {
              return (
                <MenuItem
                  key={menuItem.name}
                  item={pagesConfig[menuItem.name]}
                  subMenus={menuItem.pages}
                  conditionToTest={conditionToTest}
                  navigation={navigation}
                />
              );
            })}
          </View>
        )}
      </>
    );
  };

  render() {
    const {navigation} = this.props;
    const MenuItem = this.MenuItem;
    const {colors} = Theme.blueBackground;
    const styles = createStyles({...this.props, colors});
    return (
      <ThemeProvider theme={Theme.blueBackground}>
        <View style={styles.container}>
          <View style={styles.background}>
            <View style={styles.headerContainer}>
              <View style={styles.titleHeaderContainer}>
                <IconButton
                  onPress={() => toggleDrawer()}
                  icon={() => (
                    <MaterialCommunityIcons
                      color={colors.text}
                      name="menu"
                      size={Metrics.getSize(20)}
                    />
                  )}
                />

                <Typography style={styles.titleHeader}>Menu</Typography>
              </View>
              <Image source={Logos.LogoContrast} style={styles.image} />
            </View>

            {pagesConfig.home.map((item, index) => {
              if (item.showInMenu) {
                return (
                  <React.Fragment key={item.name}>
                    <MenuItem
                      item={item}
                      subMenus={item.pages}
                      conditionToTest={50}
                      navigation={navigation}
                      colors={colors}
                      index={index}
                    />
                    {index === pagesConfig.home.length - 1 ? (
                      <MenuItem
                        item={{
                          title: 'Sair',
                          icon: 'exit-to-app',
                          pageConditionsToShow: null,
                          able: true,
                        }}
                        colors={colors}
                        conditionToTest={50}
                        index={index + 1}
                      />
                    ) : null}
                  </React.Fragment>
                );
              } else if (index === pagesConfig.home.length - 1) {
                return (
                  <MenuItem
                    key="sair"
                    item={{
                      title: 'Sair',
                      icon: 'exit-to-app',
                      pageConditionsToShow: null,
                      able: true,
                    }}
                    colors={colors}
                    conditionToTest={50}
                    index={index}
                  />
                );
              }
            })}
          </View>
        </View>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  const {globalLogout} = GlobalCreators;

  return {
    logout: function () {
      return dispatch(globalLogout());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu);
function createStyles(props) {
  return StyleSheet.create({
    container: {
      paddingRight: Metrics.spacingXLG * 2,
      flex: 1,
    },
    background: {
      backgroundColor: props.colors.background,
      flex: 1,
    },
    headerContainer: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      padding: Metrics.spacingMD,
    },
    image: {
      width: Metrics.getSize(60),
      height: Metrics.getSize(60),
      alignSelf: 'flex-end',
      marginBottom: Metrics.spacingLG,
    },
    titleHeaderContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    titleHeader: {
      fontSize: Metrics.getSize(14),
      marginLeft: Metrics.spacingMD,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: props.colors.text,
    },
  });
}

function createItemStyles(props) {
  return StyleSheet.create({
    container: {
      backgroundColor: props.alternative
        ? props.colors.backgroundContrast
        : null,
      marginVertical: Metrics.spacingMinimun,
      paddingVertical: Metrics.spacingMD,
      paddingHorizontal: Metrics.spacingLG,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
    },

    icon: {
      opacity: props.alternative ? 0.6 : 1,
    },

    title: {
      opacity: props.alternative ? 0.6 : 1,
      marginLeft: Metrics.spacingMD,
      textTransform: 'uppercase',
      color: props.colors.text,
      fontSize: Metrics.getSize(14),
    },
  });
}
