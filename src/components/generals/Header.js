import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Theme, Logos, Metrics} from '../../config';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconButton} from 'react-native-paper';
import {toggleDrawer} from '../../navigation/NavigationHelpers';

class Header extends React.Component {
  render() {
    const {colors} = Theme.header;

    return (
      <View style={styles.container}>
        <IconButton
          onPress={this.props.hideMenu ? () => {} : () => toggleDrawer()}
          icon={() => (
            <MaterialCommunityIcons
              color={colors.text}
              name="menu"
              size={Metrics.getSize(20)}
            />
          )}
        />

        <Image source={Logos.Logo} style={styles.image} />

        <IconButton
          icon={() => (
            <MaterialCommunityIcons
              color={colors.accent}
              name="bell"
              size={Metrics.getSize(20)}
            />
          )}
        />
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Theme.header.colors.background,
    padding: Metrics.spacingSM,
    elevation: 10,
  },

  image: {
    width: 60,
    height: 60,
  },
});
