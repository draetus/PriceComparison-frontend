import React, { Component } from 'react';
import { ButtonContained, Typography } from '../../../components';

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
        const {createShoppingListsRequest, deleteShoppingListsRequest} = this.props;

        return (
        <>
            <Typography> MINHAS LISTAS DE COMPRAS </Typography>

            <this.ShoppingList />

            <ButtonContained onPress={() => {
                createShoppingListsRequest({name: "TESTE"})
            }}> CRIAR NOVA LISTA </ButtonContained>
        </>
        )
    }

}

export default ShoppingListPresentation;