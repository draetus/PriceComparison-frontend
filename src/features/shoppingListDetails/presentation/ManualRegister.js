import React, { Component } from 'react';
import { ButtonContained, Input, Typography } from '../../../components';
import { FormHolder } from '../../../FormConfig';

class ManualRegister extends Component {

    render() {
        return (
        <>
        <Typography> ADICIONAR A LISTA DE COMPRAS </Typography>
        <FormHolder
            onSubmit={(data) => {
                const { openAddProductToShoppingListModalRequest, id, clear } = this.props;
                openAddProductToShoppingListModalRequest({barcode: data.barcode, id: id});
                clear();
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