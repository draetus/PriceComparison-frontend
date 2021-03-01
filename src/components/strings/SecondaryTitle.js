import React from 'react';
import {withTheme} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {Metrics} from '../../config';
import {Typography} from '..';

function PrimaryTitle({children, ...props}) {
  const styles = createStyles(props);
  return (
    <Typography {...props} style={styles.text}>
      {children}
    </Typography>
  );
}

export default withTheme(PrimaryTitle);

function createStyles({style = {}, ...props}) {
  return StyleSheet.create({
    text: {
      color: props.color ? props.color : props.theme.colors.accent,
      fontSize: props.fontSize ? props.fontSize : Metrics.getSize(15),
      marginBottom: props.bottomMargin ? Metrics.spacingMD : 0,
      marginTop: props.topMargin ? Metrics.spacingMD : 0,
      fontFamily: 'Bitter Bold',
      ...style,
    },
  });
}
