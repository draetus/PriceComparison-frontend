import React, { Component } from 'react';
import { ButtonContained, Typography } from '../../../components';
import {registerShoppingListModal} from '../../../modals/utils';

class ShoppingListPresentation extends Component {

    ShoppingList = () => {
        const {shoppinglists = [], deleteShoppingListsRequest} = this.props;
        return (
            shoppinglists.map((item, index) => (
                <ButtonContained onPress={() => {
                    deleteShoppingListsRequest({id: item.id})
                }}
                key = {item.id}> {item.name} </ButtonContained>
            ))
        )
    }

    render() {
        return (
        <>
            <Typography> MINHAS LISTAS DE COMPRAS </Typography>

            <this.ShoppingList />

            <ButtonContained onPress={() => {
                registerShoppingListModal.setInfos();
            }}> CRIAR NOVA LISTA </ButtonContained>
        </>
        )
    }

}

export default ShoppingListPresentation;