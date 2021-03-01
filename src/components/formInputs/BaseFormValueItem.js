import React from 'react';
import {FormHolder} from '../../FormConfig';

class BaseFormValueItem extends React.Component {
  constructor(props) {
    super(props);

    const {defaultValue = '', actualValue, mask} = props;
    const value = actualValue !== undefined ? actualValue : defaultValue;
    const finalValue = mask ? mask(value) : value;
    this.state = {
      error: '',
      value: finalValue,
      actualValue: finalValue,
      open: false,
    };
    this.ref = React.createRef(null);
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
      this.formHandler.updateInput(this.props.name, {
        required: this.props.required,
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
    this.formHandler.removeInput(this.props.name);
  }

  componentDidMount() {
    const {
      name,
      label,
      mask,
      maskToSubmit,
      validation,
      required,
      nextInput,
      defaultValue = '',
    } = this.props;

    this.mounted = true;
    const {formHandler} = this.context;
    this.formHandler = formHandler;
    this.formHandler.setInput({
      ref: this.ref.current,
      name,
      label,
      value: this.state.value,
      defaultValue,
      mask,
      nextInput,
      maskToSubmit,
      errorHandler: (error) => this.setState({error}),
      validation,
      required,
      handleValue: this.setConfigs,
    });
    if (this.props.ref) {
      this.props.ref(this.ref.current);
    }
  }

  setValueWithoutOnChange = (value = '') => {
    const {maskToSubmit, maxLength, mask} = this.props;
    let maxLengthValue = value;

    if (maxLength && (value !== null || value !== undefined)) {
      maxLengthValue = value.substring(0, maxLength);
    }

    const resultedValue = mask ? mask(maxLengthValue) : maxLengthValue;

    const finalValue = maskToSubmit
      ? maskToSubmit(resultedValue)
      : resultedValue;

    this.formHandler.setFormValue(this.props.name, maxLengthValue);
    if (this.mounted) {
      this.setState({value: resultedValue, error: ''});
    }

    return finalValue;
  };

  setConfigs = (value = '') => {
    const finalValue = this.setValueWithoutOnChange(value);

    if (this.props.onChange) {
      this.props.onChange(finalValue);
    }

    if (this.props.submitOnChange) {
      this.formHandler.submit();
    }
    return null;
  };

  handleSubmit = () => {
    if (this.props.nextInput) {
      this.nextSet = true;
      this.formHandler.setNext(this.props.nextInput);
    } else if (this.props.submit) {
      this.formHandler.submit();
    }
  };

  onBlur = () => {
    if (!this.nextSet) {
      if (this.props.callBlurIfChange) {
        if (this.state.actualValue !== this.state.value) {
          if (this.mounted) {
            this.setState((state) => ({actualValue: state.value}));
          }
          if (this.props.submitOnBlur) {
            this.formHandler.submit();
          }
          if (this.props.onBlur) {
            this.props.onBlur(this.state.value);
          }
        }
      } else if (this.props.submitOnBlur) {
        this.formHandler.submit();
      }
      if (this.props.onBlur) {
        this.props.onBlur(this.state.value);
      }
    } else {
      this.nextSet = false;
    }

    this.formHandler.testInputError(this.props.name);
    return null;
  };
}

BaseFormValueItem.contextType = FormHolder.FormContext;

export default BaseFormValueItem;
