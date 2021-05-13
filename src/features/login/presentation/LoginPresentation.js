import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { ButtonContained, InputCPF, InputPassword } from "../../../components";
import { FormHolder } from "../../../FormConfig";

class LoginPresentation extends Component {

    render() {
        const { login } = this.props;
        return (
        <FormHolder
            onSubmit={(data) => {
                login(data);
            }}
        >
            <InputCPF name="username" defaultValue={"11411085930"}/>
            <InputPassword name="password" defaultValue={"0xff8029"}/>

            <ButtonContained style={styles.loginButton} type="submit" loading={false} > LOGIN </ButtonContained>
        </FormHolder>
        )

    }

}

const styles = StyleSheet.create({
    loginButton: {
        display: "flex",
        flexWrap: "wrap",
        borderColor: "#a10013",
        borderWidth: 2,
        marginLeft: 50,
        marginRight: 50
    }
  });

export default LoginPresentation;