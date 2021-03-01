import React from 'react';
import {Validations} from '../../lib';
import Input from './Input';

class InputEmail extends React.Component {
  render() {
    return <Input {...this.props} validation={Validations.isEMAIL} />;
  }
}

export default InputEmail;
