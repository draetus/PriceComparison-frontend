import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  RadioButton,
  withTheme,
  TouchableRipple,
  HelperText,
} from 'react-native-paper';
import BaseFormBooleanItem from './BaseFormBooleanItem';
import {Metrics} from '../../config';
import {Typography} from '..';

class RadioButtonComponent extends BaseFormBooleanItem {
  render() {
    const {
      children,
      theme,
      labelStyles,
      // noTest,
      ...restProps
    } = this.props;

    const {error, value} = this.state;
    const rest = {...restProps};
    delete rest.label;
    delete rest.maskToSubmit;
    delete rest.required;
    delete rest.validation;
    delete rest.alternative;
    delete rest.defaultValue;
    delete rest.mask;
    delete rest.callBlurIfChange;
    delete rest.actualValue;
    delete rest.inputContainerStyles;
    delete rest.submitOnBlur;
    delete rest.submitOnChange;
    delete rest.onSubmitCallback;
    delete rest.submit;
    delete rest.name;
    delete rest.nextInput;
    delete rest.formContextArrayIndex;
    delete rest.handleForm;

    const styles = createStyles(this.props);

    const color = error
      ? theme.colors.error
      : value
      ? theme.colors.accent
      : theme.colors.text;
    return (
      <View style={styles.container}>
        <TouchableRipple
          onPress={() => this.setConfigs(!value)}
          style={styles.touchableContainer}>
          <>
            <RadioButton
              value={value}
              color={color}
              status={value ? 'checked' : 'unchecked'}
              onPress={() => this.setConfigs(!value)}
            />
            {children ? (
              <View
                style={{
                  paddingTop: Metrics.spacingMinimun,
                  ...labelStyles,
                }}>
                <Typography style={styles.label}>{children}</Typography>
              </View>
            ) : null}
          </>
        </TouchableRipple>
        {error ? (
          <HelperText type="error" style={styles.errorText}>
            {error}
          </HelperText>
        ) : null}
      </View>
    );
  }
}

export default withTheme(RadioButtonComponent);

function createStyles(props) {
  const {align, small} = props;
  return StyleSheet.create({
    container: {
      alignSelf: align ? align : 'flex-start',
    },
    touchableContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: Metrics.spacingSM,
    },

    label: {
      fontSize: small ? Metrics.getSize(12) : Metrics.getSize(13),
    },
  });
}
