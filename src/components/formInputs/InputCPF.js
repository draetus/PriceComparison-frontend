import React from 'react';
import {Validations} from '../../lib';
import Input from './Input';

class InputCPF extends React.Component {
  render() {
    return <Input {...this.props} validation={Validations.isCPF} />;
  }
}

export default InputCPF;
