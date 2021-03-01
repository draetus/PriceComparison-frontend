import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, withTheme} from 'react-native-paper';

import {Theme, Metrics} from '../../config';
import {FormHolder} from '../../FormConfig';

class ButtonText extends React.Component {
  render() {
    const {
      theme = Theme.DarkTheme,
      alternative,
      children,
      disabled,
      loading,
      onPress,
      alignSelf,
      type,
      ...rest
    } = this.props;
    let textColor = theme.colors.accent;

    let onButtonPress = null;
    if (this.context && this.context.formHandler && type === 'submit') {
      onButtonPress = () => this.context.formHandler.submit();
    } else {
      onButtonPress = onPress;
    }

    const styles = createStyles(this.props);

    return (
      <Button
        {...rest}
        style={styles.container}
        contentStyle={styles.content}
        labelStyle={styles.label}
        // style={{
        //   marginVertical: Metrics.spacingMinimun,
        //   // marginHorizontal: alignSelf === 'stretch' ? Metrics.spacingLG : 0,
        //   alignSelf: alignSelf,
        //   ...rest.style,
        // }}
        // theme={{roundness: 50}}
        color={textColor}
        loading={loading}
        mode="text"
        onPress={disabled || loading ? null : onButtonPress}>
        {children}
      </Button>
    );
  }
}

ButtonText.contextType = FormHolder.FormContext;

export default withTheme(ButtonText);

function createStyles(props) {
  const {labelStyle = {}, contentStyle = {}} = props;
  return StyleSheet.create({
    container: {
      marginVertical: Metrics.spacingMinimun,
      borderRadius: 2,
      alignSelf: props.alignSelf,

      height: Metrics.spacingXLG,
      minWidth: Metrics.spacingXLG,
      opacity: props.disabled ? 0.6 : 1,

      ...props.style,
    },
    content: {
      height: '100%',
      ...contentStyle,
    },
    label: {
      textTransform: 'none',
      ...labelStyle,
    },
  });
}
