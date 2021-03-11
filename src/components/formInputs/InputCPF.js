import React from 'react';
import {Filters, Masks, Validations} from '../../lib';
import Input from './Input';

class InputCPF extends React.Component {
  render() {
    return <Input 
    {...this.props} 
    mask={Masks.inputMaskCPF}
    maskToSubmit={Filters.clearStringOnlyNumbers}
    validation={Validations.isCPF} 
    maxLength={18}
     />;
  }
}

export default InputCPF;
