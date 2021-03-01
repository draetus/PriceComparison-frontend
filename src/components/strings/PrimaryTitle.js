import React from 'react';
import {withTheme} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {Metrics} from '../../config';
import Typography from './Typography';

function PrimaryTitle({children, ...props}) {
  const styles = createStyles(props);
  return (
    <Typography style={styles.text} {...props}>
      {children}
    </Typography>
  );
}

export default withTheme(React.memo(PrimaryTitle));

function createStyles(props) {
  return StyleSheet.create({
    text: {
      color: props.color ? props.color : props.theme.colors.accent2,
      fontSize: props.fontSize ? props.fontSize : Metrics.getSize(17),
      marginBottom: props.bottomMargin ? Metrics.spacingLG : 0,
      marginTop: props.topMargin ? Metrics.spacingLG : 0,
      fontFamily: 'Bitter Bold',
    },
  });
}
