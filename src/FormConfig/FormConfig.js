export default class FormHandler {
  onSubmit = null; // expect a function
  clearOnSubmit = false; // expect a boolean

  constructor(onSubmit, clearOnSubmit) {
    this.onSubmit = onSubmit;
    this.clearOnSubmit = clearOnSubmit;
  }

  formInputs = {};
  inputNames = [];
  errorsMessages = [];

  setInput = ({name, value, maskToSubmit, isArray, isObjectArray, ...rest}) => {
    this.inputNames.push(name);

    this.formInputs[name] = {
      value,
      maskToSubmit,
      ...rest,
    };
    return null;
  };

  getBaseName = (name) => {
    const split = name.split('.');
    return split[split.length - 1];
  };

  removeInput = (name) => {
    if (this.formInputs[name]) {
      delete this.formInputs[name];
      const nameIndex = this.inputNames.indexOf(name);
      this.inputNames.splice(nameIndex, 1);
    }
    return null;
  };

  updateInput = (name, rest = {}) => {
    this.formInputs[name] = {...this.formInputs[name], ...rest};
    return null;
  };

  getInputRef = (name) => {
    if (this.formInputs[name].ref) {
      return this.formInputs[name].ref;
    }
    return null;
  };

  setValue = (name, value) => {
    if (this.formInputs[name]) {
      this.formInputs[name].handleValue(value);
    }
    return null;
  };

  setFormValue = (name, value) => {
    this.formInputs[name].value = value;
    return null;
  };

  clearValue = (name) => {
    if (this.formInputs[name]) {
      this.formInputs[name].handleValue('');
    }
    return null;
  };

  setDefaultValue = (name) => {
    if (this.formInputs[name]) {
      this.formInputs[name].handleValue(this.formInputs[name].defaultValue);
    }
    return null;
  };

  getFieldValue = (name) => {
    if (this.formInputs[name]) {
      return this.formInputs[name].value;
    }
  };

  formatValueToSubmit = (value, maskToSubmit) => {
    const fixedValue = typeof value === 'string' ? value.trim() : value;
    return maskToSubmit && (fixedValue || fixedValue === 0)
      ? maskToSubmit(fixedValue)
      : fixedValue;
  };

  getValues = () => {
    const data = {};
    this.inputNames.map((name) => {
      const {maskToSubmit} = this.formInputs[name];
      const value = this.getFieldValue(name);
      if (Boolean(value) || value === 0) {
        data[name] = this.formatValueToSubmit(value, maskToSubmit);
      }
      return null;
    });
    return data;
  };

  testErrorsAndReturnData = () => {
    let hasError = false;
    const data = {};
    this.errorsMessages = [];
    this.inputNames.map((name) => {
      const {maskToSubmit} = this.formInputs[name];
      const value = this.getFieldValue(name);

      if (Boolean(value) || value === 0) {
        data[name] = this.formatValueToSubmit(value, maskToSubmit);
      }

      const {error, errorMessage} = this.testInputError(name);

      if (error) {
        this.concatErrorMessages(name, errorMessage);
        if (!hasError) {
          hasError = error;
        }
      }

      return null;
    });
    return {hasError, data};
  };

  concatErrorMessages(name, errorMessage) {
    this.errorsMessages.push(
      `${this.formInputs[name].label}{*}${errorMessage}`,
    );
  }

  testInputError = (name, shouldUpdateInput = true) => {
    if (this.formInputs[name]) {
      const {validation, required, value} = this.formInputs[name];
      if (Boolean(value) || value === 0) {
        if (validation) {
          const {isValid, errorMessage} = validation(value, this.getFieldValue);
          if (!isValid) {
            const eMessage = !required
              ? 'Campo não obrigatório. Remova seu valor ou corrija o seguinte erro para prosseguir: ' +
                errorMessage
              : errorMessage;
            if (shouldUpdateInput) {
              this.formInputs[name].errorHandler(eMessage);
            }
            return {error: true, errorMessage: eMessage};
          }
        }
      } else if (required) {
        if (shouldUpdateInput) {
          this.formInputs[name].errorHandler(required);
        }
        return {error: true, errorMessage: required};
      }
      return {error: false};
    }
    return {error: false};
  };

  clearAllValues = (setDefault) => {
    this.inputNames.map((name) => {
      if (setDefault) {
        this.setDefaultValue(name);
      } else {
        this.clearValue(name);
      }
      return null;
    });
    return null;
  };

  clearSpecificValues = (names, setDefault) => {
    names.map((name) => {
      if (setDefault) {
        this.setDefaultValue(name);
      } else {
        this.clearValue(name);
      }
      return null;
    });
    return null;
  };

  setCustomError = (name, message) => {
    this.formInputs[name].errorHandler(message);
    return null;
  };

  setNext = (name, event) => {
    const nativeInput = this.getInputRef(name);
    const value = this.getFieldValue(name);
    if (nativeInput && !value) {
      nativeInput.focus();
    } else {
      let inputName = name;
      for (let i = 1; i < this.inputNames.length; i++) {
        const next = this.formInputs[inputName].nextInput;

        if (next) {
          if (!this.formInputs[next].value) {
            this.getInputRef(next).focus();
            return null;
          } else {
            inputName = this.formInputs[next].nextInput;
          }
        } else {
          this.submit();
          return null;
        }
      }
      this.submit();
    }
    return null;
  };

  submit = () => {
    if (this.onSubmit) {
      const {hasError, data} = this.testErrorsAndReturnData();
      if (!hasError) {
        this.onSubmit(data);
        if (this.clearOnSubmit) {
          this.clearAllValues();
        }
      }
    }
    return null;
  };
}
