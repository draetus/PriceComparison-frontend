import React, { Component } from 'react';
import { ButtonContained, InputCPF, InputPassword } from "../../../components";
import { FormHolder } from "../../../FormConfig";

class LoginPresentation extends Component {

    render() {
        return (
        <FormHolder
            onSubmit={(data) => console.log("SUBMIT: ", data)}
        >
            <InputCPF name="username" />
            <InputPassword name="password" />
            <ButtonContained submit> LOGIN </ButtonContained>
        </FormHolder>
        )

    }

}

export default LoginPresentation;