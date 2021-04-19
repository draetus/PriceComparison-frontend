import React, { Component } from 'react';
import { ButtonContained, Typography } from '../../../components';

class ShoppingListPresentation extends Component {

    ShoppingList = () => {
        const {shoppinglists = []} = this.props;
        console.log("SHOPPING LIST PRESENTATION: ", this.props);
        return (
            shoppinglists.map((item, index) => (
                <Typography> {item.name} </Typography>
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