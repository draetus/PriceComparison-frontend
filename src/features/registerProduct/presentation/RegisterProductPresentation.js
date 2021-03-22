import React, { Component } from 'react';
import { ButtonContained, Input, Typography } from '../../../components';
import { FormHolder } from '../../../FormConfig';
import { Navigation } from "../../../navigation";

class RegisterProductPresentation extends Component {

    FormProduct = () => {
        const { exists } = this.props;
        console.log("FORM PRODUCT:", this.props);
        console.log("FORM PRODUCT:", exists);
        if (exists == null) {
            return (
            <>
                <ButtonContained type="submit" loading={false} > VERIFICAR CÓDIGO DE BARRAS </ButtonContained>
            </>
            );
        }
        if (exists == true) {
            return (
            <>
                <Typography>PRODUTO EXISTE</Typography>
                <ButtonContained type="submit" loading={false} > VERIFICAR NOVAMENTE </ButtonContained>
            </>
            );
        } else {
            return (
            <>
                <Typography>PRODUTO NÃO EXISTE</Typography>
                <Input name="name" inputLabel="NOME DO PRODUTO" />
                <ButtonContained type="submit" loading={false} > ADICIONAR PRODUTO </ButtonContained>
            </>
            );
        }
    }

    render() {
        const { checkIfExistsRequest, saveProductRequest } = this.props;
        return (
        <>
        <Typography> REGISTRO DE PRODUTOS </Typography>
        <FormHolder
            onSubmit={(data) => {
                if (data.name) {
                    saveProductRequest(data);
                    Navigation.toHome();
                } else {
                    checkIfExistsRequest(data);
                }
            }}
        >
            <Input name="barCode" inputLabel="CÓDIGO DE BARRAS" />

            <this.FormProduct />
        </FormHolder>
        </>
        )
    }

}

export default RegisterProductPresentation;