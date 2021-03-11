import React, { Component } from 'react';
import { Button } from 'react-native';
import { ButtonContained, InputCPF, InputPassword } from "../../../components";
import { FormHolder } from "../../../FormConfig";
import loginRequest from '../reduxSagas/loginRequest';

class LoginPresentation extends Component {

    render() {
        const { login } = this.props;
        return (
        <FormHolder
            onSubmit={(data) => {
                login(data);
            }}
        >
            <InputCPF name="username" />
            <InputPassword name="password" />

            <ButtonContained type="submit" loading={false} > LOGIN </ButtonContained>
        </FormHolder>
        )

    }

}

export default LoginPresentation;