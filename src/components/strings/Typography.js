import React from 'react';
import {Text, withTheme} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {Metrics} from '../../config';

function Typography({children, ...props}) {
  const styles = createStyles(props);
  return (
    <Text {...props} style={styles.text}>
      {children}
    </Text>
  );
}

export default withTheme(Typography);

function createStyles({style = {}, ...props}) {
  return StyleSheet.create({
    text: {
      color: props.colors ? props.colors : props.theme.colors.text,
      fontSize: Metrics.getSize(12),
      marginBottom: props.bottomMargin ? Metrics.spacingSM : 0,
      marginTop: props.topMargin ? Metrics.spacingSM : 0,
      fontFamily: 'Poppins Regular',
      ...style,
    },
  });
}
