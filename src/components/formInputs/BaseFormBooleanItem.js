import React from 'react';
import {FormHolder} from '../../FormConfig';

class BaseFormBooleanItem extends React.Component {
  constructor(props) {
    super(props);

    const {defaultValue = '', actualValue} = props;
    const finalValue = actualValue !== undefined ? actualValue : defaultValue;
    this.state = {
      error: '',
      value: finalValue,
      actualValue: finalValue,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.actualValue) {
      return {
        ...state,
        actualValue: props.mask
          ? props.mask(props.actualValue)
          : props.actualValue,
      };
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.actualValue !== this.props.actualValue) {
      this.setValueWithoutOnChange(this.props.actualValue);
    }

    if (prevProps.required !== this.props.required) {
      this.formHandler.updateInput(this.name, {
        required: this.props.required,
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
    this.formHandler.removeInput(this.name);
  }

  componentDidMount() {
    const {
      name,
      label,
      validation,
      required,
      defaultValue = '',
      formContextArrayIndex,
    } = this.props;

    this.mounted = true;
    const {formHandler, contextName, isArray, isObjectArray} = this.context;
    this.formHandler = formHandler;

    this.name = contextName
      ? contextName +
        '.' +
        (formContextArrayIndex !== undefined
          ? formContextArrayIndex + '.'
          : '') +
        name
      : name;

    this.formHandler.setInput({
      name,
      label,
      value: defaultValue,
      defaultValue,
      errorHandler: (error) => this.setState({error}),
      validation,
      required,
      isArray,
      isObjectArray,
      formContextArrayIndex,
      handleValue: this.setConfigs,
    });
  }

  setValueWithoutOnChange = (value) => {
    this.context.formHandler.setFormValue(this.name, Boolean(value));
    this.setState({value: Boolean(value), error: ''});
  };

  setConfigs = (value) => {
    this.setValueWithoutOnChange(value);

    if (this.props.onChange) {
      this.props.onChange(Boolean(value));
    }

    if (this.props.submitOnChange) {
      this.formHandler.submit();
    }
  };
}

BaseFormBooleanItem.contextType = FormHolder.FormContext;

export default BaseFormBooleanItem;
