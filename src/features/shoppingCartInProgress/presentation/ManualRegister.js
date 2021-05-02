import React, { Component } from 'react';
import { ButtonContained, Input, Typography } from '../../../components';
import { FormHolder } from '../../../FormConfig';

class ManualRegister extends Component {

    render() {
        return (
        <>
        <Typography> ADICINAR AO CARRINHO DE COMPRAS </Typography>
        <FormHolder
            onSubmit={(data) => {
                const { openAddProductToShoppingCartModalRequest, clear, id, products, shoppingListProducts } = this.props;
                openAddProductToShoppingCartModalRequest({
                    barcode: data.barcode, 
                    shoppingListId: id, 
                    shoppingListProducts: shoppingListProducts, 
                    shoppingCartProducts: products
                });
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