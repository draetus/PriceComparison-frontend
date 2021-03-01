import React from 'react';
import {Metrics} from '../../config';
import {StyleSheet} from 'react-native';

import {IconButton, withTheme} from 'react-native-paper';
import {goBack} from '../../navigation/NavigationHelpers';

class BackButton extends React.Component {
  render() {
    const styles = createStyles();
    const {colors} = this.props.theme;
    return (
      <IconButton
        icon="chevron-left"
        size={Metrics.getSize(28)}
        color={this.props.accentColor ? colors.accent2 : colors.text}
        onPress={goBack}
        style={styles.button}
      />
    );
  }
}

export default withTheme(BackButton);

function createStyles() {
  return StyleSheet.create({
    button: {
      margin: 0,
      marginLeft: -Metrics.spacingSM * 2,
    },
  });
}
