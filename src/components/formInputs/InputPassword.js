import React from 'react';
import Input from './Input';

class InputPassword extends React.Component {
  state = {
    showPassword: false,
  };

  render() {
    return (
      <Input
        {...this.props}
        secureTextEntry={!this.state.showPassword}
        icon={{
          name: this.state.showPassword ? 'eye-off' : 'eye',
          onPress: () =>
            this.setState((state) => ({showPassword: !state.showPassword})),
        }}
      />
    );
  }
}

export default InputPassword;
