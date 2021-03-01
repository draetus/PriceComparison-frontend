import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ActivityIndicator, withTheme} from 'react-native-paper';
import {Metrics} from '../../config';

const SIZES = {
  small: 16,
  medium: 20,
  large: 32,
};

function Loading({size = 'medium', theme, color, pageLoader}) {
  const styles = createStyles({pageLoader});
  return (
    <View style={styles.container}>
      <ActivityIndicator
        color={color ? color : theme.colors.accent}
        size={SIZES[pageLoader ? 'large' : size]}
      />
    </View>
  );
}

export default withTheme(Loading);

function createStyles(props) {
  return StyleSheet.create({
    container: {
      paddingVertical: props.withPadding ? Metrics.spacingLG : null,
      flex: props.pageLoader ? 1 : null,
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
}
