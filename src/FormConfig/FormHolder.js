import React from 'react';
import FormHandler from './FormConfig';

class FormHolder extends React.Component {
  constructor(props) {
    super(props);
    this.formHandler = new FormHandler(props.onSubmit, props.clearOnSubmit);
    if (props.formRef) {
      props.formRef(this.formHandler);
    }
  }

  static FormContext = React.createContext(null);

  render() {
    return (
      <FormHolder.FormContext.Provider
        value={{
          formHandler: this.formHandler,
        }}>
        {this.props.children}
      </FormHolder.FormContext.Provider>
    );
  }
}

export default FormHolder;
