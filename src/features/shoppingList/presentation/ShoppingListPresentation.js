import React, { Component } from 'react';
import { ButtonContained, Typography } from '../../../components';
import {registerShoppingListModal} from '../../../modals/utils';
import {Navigation} from "../../../navigation"

class ShoppingListPresentation extends Component {

    ShoppingList = () => {
        const {shoppinglists = [], searchShoppingListProductsRequest} = this.props;
        return (
            shoppinglists.map((item, index) => (
                <ButtonContained onPress={() => {
                    searchShoppingListProductsRequest({id: item.id})
                    Navigation.toShoppingListDetails(item);
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