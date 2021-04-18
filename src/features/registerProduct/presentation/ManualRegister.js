import React, { Component } from 'react';
import { ButtonContained, Input, Typography } from '../../../components';
import { FormHolder } from '../../../FormConfig';

class ManualRegister extends Component {

    render() {
        return (
        <>
        <Typography> REGISTRO DE PRODUTOS </Typography>
        <FormHolder
            onSubmit={(data) => {
                const { openRegisterProductModalRequest } = this.props;
                openRegisterProductModalRequest({barcode: data.barcode});
            }}
        >
            <Input name="barcode" inputLabel="CÓDIGO DE BARRAS" />

            <ButtonContained type="submit" loading={false} > VERIFICAR CÓDIGO DE BARRAS </ButtonContained>
        </FormHolder>
        </>
        )
    }

}

export default ManualRegister;