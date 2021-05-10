import React from 'react';
import {withTheme, TouchableRipple} from 'react-native-paper';

import {Metrics, Theme} from '../../config';
import {FormHolder} from '../../FormConfig';
import {StyleSheet, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Typography} from '..';
import Loading from '../generals/Loading';

class ButtonContained extends React.Component {
  render() {
    const {
      theme = Theme.DarkTheme,
      children,
      disabled,
      loading,
      onPress,
      type,
      icon,
    } = this.props;

    let onButtonPress = null;
    if (this.context && this.context.formHandler && type === 'submit') {
      onButtonPress = () => this.context.formHandler.submit();
    } else {
      onButtonPress = onPress;
    }

    const styles = createStyles(this.props);

    return (
      <TouchableRipple
        rippleColor="#ffffff40"
        style={styles.container}
        onPress={disabled || loading ? null : onButtonPress}>
        <View style={styles.labelContainer}>
          {loading ? (
            <Loading size="small" color={theme.colors.buttonText} />
          ) : (
            <>
              {icon ? (
                <MaterialCommunityIcons
                  color={theme.colors.buttonText}
                  name={icon}
                  size={Metrics.getSize(20)}
                />
              ) : null}
              <Typography style={styles.label}>{children}</Typography>
            </>
          )}
        </View>
      </TouchableRipple>
    );
  }
}

ButtonContained.contextType = FormHolder.FormContext;

export default withTheme(ButtonContained);

function createStyles(props) {
  return StyleSheet.create({
    container: {
      marginVertical: Metrics.spacingMinimun,
      // borderRadius: 8,
      alignSelf: props.alignSelf,

      height: Metrics.spacingXLG,
      backgroundColor: props.alternative
        ? props.theme.colors.buttonAlternativeBackground
        : props.theme.colors.buttonBackground,
      opacity: props.disabled ? 0.6 : 1,
      justifyContent: 'center',
      ...props.style,
    },
    content: {
      height: '100%',
    },
    labelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      textTransform: 'none',
      fontFamily: 'Poppins Regular',
      fontSize: Metrics.getSize(13),
      color: props.theme.colors.buttonText,
      marginLeft: props.icon ? Metrics.spacingSM : 0,
    },
  });
}
